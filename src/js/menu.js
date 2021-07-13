// btn toggle

//	document.querySelector('.btn-menu-toggle').addEventListener('click', () => document.body.classList.toggle('menu-show'));

// btn thema

	function getCookie(name) {

		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

		return matches ? decodeURIComponent(matches[1]) : undefined;

	}

	function setCookie(name, value, options = {}) {

		options = {
			path: '/'
		};

		if (options.expires instanceof Date) {
			options.expires = options.expires.toUTCString();
		}

		let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

		for (let optionKey in options) {
			updatedCookie += "; " + optionKey;
			let optionValue = options[optionKey];
			if (optionValue !== true) {
				updatedCookie += "=" + optionValue;
			}
		}

		document.cookie = updatedCookie;

	}

	Array.from(document.querySelectorAll('.btn-thema-toggle'), btn => {

		btn.addEventListener('click', () => {

			if (getCookie('thema') === 'white') {

				setCookie('thema', 'dark');
				document.body.classList.remove('thema-white');
				document.head.querySelector('[name="theme-color"]').setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());

			} else {

				setCookie('thema', 'white');
				document.body.classList.add('thema-white');
				document.head.querySelector('[name="theme-color"]').setAttribute('content', '#ffffff');

			}

		});

	});

	if (getCookie('thema') === 'white') {

		document.body.classList.add('thema-white');
		document.head.querySelector('[name="theme-color"]').setAttribute('content', '#ffffff');

	}