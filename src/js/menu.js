// btn toggle

	document.querySelector('.btn-menu-toggle').addEventListener('click', () => document.body.classList.toggle('menu-show'));


	Array.from(document.querySelectorAll('.menu__link'), link =>
		link.addEventListener('click', () =>
			document.body.classList.remove('menu-show')));