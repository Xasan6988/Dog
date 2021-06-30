const galleryItem = document.querySelectorAll('.gallery-item');
const galleryOutput = document.querySelector('.show-item');
const testimonialCards = document.querySelectorAll('.cards');
const upBtn = document.querySelector('#arrow-up');
const downBtn = document.querySelector('#arrow-down');

let count = 0;

const slideUp = () => {
	if (count > 2) {
		count = 0;
	}
	console.log(count);
	testimonialCards[count].classList.add('hide');
	if (count === 2) {
		testimonialCards[0].classList.remove('hide');
	} else {
		testimonialCards[count + 1].classList.remove('hide');
	}
	count++;
	console.log(count);
}

const slideDown =() => {
	if (count < 0) {
		count = 2;
	}
	testimonialCards[count].classList.add('hide');
	if (count === 0) {
		testimonialCards[2].classList.remove('hide');
	} else {
		testimonialCards[count - 1].classList.remove('hide');
	}
		count--;
}

upBtn.addEventListener('click', slideDown);
downBtn.addEventListener('click', slideUp);

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
