const galleryItem = document.querySelectorAll('.gallery-item');
const galleryOutput = document.querySelector('.show-item');
const testimonialCards = document.querySelectorAll('.cards');
const upBtn = document.querySelector('#arrow-up');
const downBtn = document.querySelector('#arrow-down');
const form = document.querySelector('.form');

let count = 0;


const showThanks = () => {
	alert('Your message has been sent! We will contact you shortly')
};


const sendForm = (data, cb) => {
	fetch('http://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(cb);
};



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


form.addEventListener('submit', e => {
	e.preventDefault();

	const formData = new FormData(form);
	const data = {};

	for (let {name, value} of formData) {
		data[name] = value;
	}

	sendForm(data, showThanks);

	form.reset();
})
