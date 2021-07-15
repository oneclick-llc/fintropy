( btn => {

	if(btn) {

		btn.addEventListener('click', event => {

			event.preventDefault();

			const iframe = document.createElement('iframe');

			iframe.setAttribute('allowfullscreen','allowfullscreen');

			iframe.src = 'https://www.youtube.com/embed/' + btn.getAttribute('data-id') + '?autoplay=1';

			document.getElementById('modal-video').appendChild(iframe);

			modal.dispatchEvent(new CustomEvent("modalShow", {
				detail: {
					selector: "video"
				}
			}));

		});

	}

})(document.querySelector('.first-screen .btn--play'));