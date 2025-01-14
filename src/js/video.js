( btn => {

	if(btn) {

		btn.addEventListener('click', event => {

			event.preventDefault();

			const iframe = document.createElement('iframe');

			iframe.setAttribute('allowfullscreen','allowfullscreen');
			iframe.setAttribute('allow','autoplay; fullscreen; picture-in-picture');

			iframe.src = 'https://player.vimeo.com/video/' + btn.getAttribute('data-id') + '?autoplay=1&title=0&byline=0&portrait=0';

			document.getElementById('modal-video').appendChild(iframe);

			modal.dispatchEvent(new CustomEvent("modalShow", {
				detail: {
					selector: "video"
				}
			}));

		});

	}

})(document.querySelector('.first-screen .btn--play'));