const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')
const mainH1 = document.querySelector('.main-text h1');


const body = document.body;


if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
		mainH1.classList.toggle('active');
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
			mainH1.classList.toggle('active');
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
			mainH1.classList.toggle('active');
		})
	})
}

