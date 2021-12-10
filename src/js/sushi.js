((btn) => {
  if (btn) {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      document.getElementById('modal-sushi-wrapper');

      modal.dispatchEvent(
        new CustomEvent('modalShow', {
          detail: {
            selector: 'sushi',
          },
        })
      );
    });
  }
})(document.querySelector('.first-screen .btn--sushi'));
