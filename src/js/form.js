( items => {

	if(!items.length) {

		return;

	}

	//reCaptcha v3

	const PUBLIC_KEY = '6LfGxU0bAAAAAClgIdFrABaU41CwTWFnlL1dfJkh';

	const reCaptcha = () => {

		Array.from(items, form => form.removeEventListener('input', reCaptcha));

		const script = document.createElement('script');

		script.async = true;
		script.src = 'https://www.google.com/recaptcha/api.js?render=' + PUBLIC_KEY;

		document.head.appendChild(script);

	}

	const submit = (form, token = false) => {

		const btn = form.querySelector('.form__submit');
		const formData = new FormData(form);

		formData.append('g_recaptcha_response', token);

		form.classList.add('is-loading');
		btn.disabled = true;

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(result => {

			console.log(result);

			form.classList.remove('is-loading');
			btn.disabled = false;

			if(result.title || result.text) {

				form.reset();
				form.querySelector('.communication__result').innerHTML = result.title;

			}

			form.classList.add('is-done');

		});

	};

	Array.from(items, form => {

		form.addEventListener('submit', event => {

			event.preventDefault();

			if (typeof(grecaptcha) === 'undefined') {

				alert('Google reCaptcha error');
				submit(form);

			} else {

				grecaptcha.ready( () => {

					grecaptcha.execute(PUBLIC_KEY).then( token => {

						submit(form, token);

					});

				});

			}

		});

		form.addEventListener('input', reCaptcha);

	});

})(document.querySelectorAll('.form'));