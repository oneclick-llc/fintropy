( header  => {

	if(header) {

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				header.classList.toggle('header--fixed', window.pageYOffset > 0);

			});

		});

	}

})(document.querySelector('.header'));