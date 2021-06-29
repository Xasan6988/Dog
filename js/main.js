const galleryItem = document.querySelectorAll('.gallery-item');
const galleryOutput = document.querySelector('.show-item');
const testimonialCards = document.querySelectorAll('.cards');
const upBtn = document.querySelector('#arrow-up');
const downBtn = document.querySelector('#arrow-down');



for (let elem of galleryItem) {
  elem.addEventListener('click', () => {
    oldSrc = elem.src.split('.');
    oldSrc.pop();
    newSrc = oldSrc.join('.') + '.svg';
    galleryOutput.src = newSrc;
  });
}


(function () {
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (const scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', function (event) {
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		});
	}
})()
