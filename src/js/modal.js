((modal) => {
  if (!modal) {
    return;
  }

  const items = modal.querySelectorAll('.modal__item'),
    btns = document.querySelectorAll('[data-modal]'),
    wrapper = document.querySelector('.wrapper');

  let activeModal = null,
    windowScroll = window.pageYOffset;

  modal.addEventListener('hide', () => {
    document.body.classList.remove('modal-show');
    wrapper.style.top = 0;
    window.scrollTo(0, windowScroll);
    activeModal = false;

    setTimeout(() => document.documentElement.classList.remove('scroll-behavior-off'));

    // clear video
    document.getElementById('modal-video').innerHTML = '';
  });

  const modalShow = (selector) => {
    document.documentElement.classList.add('scroll-behavior-off');

    if (!activeModal) {
      windowScroll = window.pageYOffset;
    }

    activeModal = modal.querySelector('.modal__item--' + selector);

    modal.classList.toggle('is-video', selector === 'video');

    Array.from(items, (el) => el.classList.toggle('visuallyhidden', el !== activeModal));

    wrapper.style.top = -windowScroll + 'px';
    document.body.classList.add('modal-show');
    window.scrollTo(0, 0);

    activeModal.focus();
  };

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal') || event.target.closest('.modal__close')) {
      if (event.target.closest('[data-modal]') === null) {
        modal.dispatchEvent(new CustomEvent('hide'));
      }
    }
  });

  Array.from(btns, (btn) =>
    btn.addEventListener('click', () => modalShow(btn.getAttribute('data-modal')))
  );

  modal.addEventListener('modalShow', (event) => modalShow(event.detail.selector));
})(document.querySelector('.modal'));
