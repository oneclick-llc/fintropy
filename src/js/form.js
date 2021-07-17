( form => {

	if (!form) {

		return;

	}

	const btn = form.querySelector(".form__submit"),
		  email = form.elements.email,
		  re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	form.addEventListener("submit", event => {

		event.preventDefault();

		if(re.test(String(email.value).toLowerCase()) === false) {

			email.focus();
			return;

		}

		form.classList.add("is-loading");
		btn.disabled = true;

		const object = {};

		new FormData(form).forEach((value, key) => (object[key] = value));

		const json = JSON.stringify(object);

		fetch(form.getAttribute("action"), {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: json
		})
//		.then(response => response.json())
		.then(result => {

			form.classList.remove("is-loading");
			btn.disabled = false;

			form.reset();

			modal.dispatchEvent(new CustomEvent("modalShow", {
				detail: {
					selector: "thank"
				}
			}));

		});

	});

})(document.querySelector(".subscribe__form"));