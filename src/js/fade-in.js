(() => {

	if ('IntersectionObserver' in window) {

		const callback = (entries, observer) => {

			Array.from(entries, entry => {

				if (entry.isIntersecting) {

					entry.target.classList.add('is-show');
					observer.unobserve(entry.target);

					setTimeout( () => entry.target.classList.remove('fade-in', 'is-show'), 1000);

				}

			});

		};

		const observer = new IntersectionObserver(callback);

		setTimeout( () => Array.from(document.querySelectorAll('.fade-in'), el => observer.observe(el)), 1000);

	} else {

		Array.from(document.querySelectorAll('.fade-in'), el => el.classList.add('is-show'));

	}

})();