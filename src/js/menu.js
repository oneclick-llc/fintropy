// btn toggle

	document.querySelector('.btn-menu-toggle').addEventListener('click', () => {
		document.body.classList.toggle('menu-show');
		var infoBlock = document.getElementById('top_info_block');
		console.log("Style: ", window.getComputedStyle(infoBlock, null).getPropertyValue('display'))
		if(window.getComputedStyle(infoBlock, null).getPropertyValue('display') === 'none'){
			document.getElementById('top_info_block').style.display = 'block';
			document.getElementById('header_block').style.paddingTop = '0px';
		}else{
			document.getElementById('top_info_block').style.display = 'none';
			document.getElementById('header_block').style.paddingTop = '20px';
		}
	});


	Array.from(document.querySelectorAll('.menu__link'), link =>
		link.addEventListener('click', () =>{
			document.body.classList.remove('menu-show');
		}));