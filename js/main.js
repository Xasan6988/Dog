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
	} else if (count < 0) {
		count = 2;
	}
	testimonialCards[count].classList.add('oldSlideDownAnim')
	setTimeout(() => {
		testimonialCards[count].classList.remove('oldSlideDownAnim');
		testimonialCards[count].classList.add('hide');
	}, 450)
	if (count === 2) {
		setTimeout(() => {
			testimonialCards[count].classList.remove('oldSlideDownAnim');
			testimonialCards[count].classList.add('hide');
			testimonialCards[0].classList.remove('hide');
		}, 500)
	} else {
		setTimeout(() => testimonialCards[count + 1].classList.remove('hide'), 450)
	}
	setTimeout(() => {
		count++;
	}, 650);
}

const slideDown = async () => {
	if (count < 0  ) {
		count = 2;
	} else if (count > 2) {
		count = 0;
	}
	testimonialCards[count].classList.add('oldSlideUpAnim')
	setTimeout(() => {
		testimonialCards[count].classList.remove('oldSlideUpAnim')
		testimonialCards[count].classList.add('hide');
	}, 450)
	if (count === 0) {
		setTimeout(() => {
			testimonialCards[count].classList.remove('oldSlideUpAnim')
			testimonialCards[count].classList.add('hide');
			testimonialCards[2].classList.remove('hide');
		}, 500);
	} else {
		setTimeout(() => {
			testimonialCards[count - 1].classList.remove('hide');
		}, 450);
	}
	setTimeout(() => {
		count--;
	}, 650);
}

upBtn.addEventListener('click', () => {
	slideDown();
	upBtn.disabled = true;
	setTimeout(() => {
		upBtn.disabled = false;
	}, 750);
});
downBtn.addEventListener('click', () => {
	slideUp();
	downBtn.disabled = true;
	setTimeout(() => {
		downBtn.disabled = false;
	}, 750);
});

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
