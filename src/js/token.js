( token => {

	if(token) {

		const btns = token.querySelectorAll('.token__btn-tab'),
			  items = token.querySelectorAll('.token__col');

		Array.from(btns, btn => btn.addEventListener('click', () => {

			Array.from(btns, (_btn,index) => {

				if(_btn === btn) {

					_btn.classList.add('is-active');
					items[index].classList.add('is-active');

				} else {

					_btn.classList.remove('is-active');
					items[index].classList.remove('is-active');

				}

			});

		}));

	}

})(document.querySelector('.token'));