function slider({
	container,
	slide,
	nextArrow,
	prevArrow,
	totalCounter,
	currentCounter,
	wrapper,
	field
}) {

let slideIndex = 1,
	offset = 0;

const slides = document.querySelectorAll(slide),
	slider = document.querySelector(container),
	next = document.querySelector(nextArrow),
	prev = document.querySelector(prevArrow),
	total = document.querySelector(totalCounter),
	current = document.querySelector(currentCounter),
	sliderWrapper = document.querySelector(wrapper),
	slideField = document.querySelector(field),
	width = window.getComputedStyle(sliderWrapper).width;


if (slides.length < 10) {
	console.log(total)
	total.textContent = `0${slides.length}`;
	current.textContent = `0${slideIndex}`;

} else {
	total.textContent = slides.length;
	current.textContent = slideIndex;

}

slideField.style.width = 100 * slides.length + '%';
slideField.style.display = 'flex';
slideField.style.transition = '0.5s all';

sliderWrapper.style.overflow = 'hidden';
slides.forEach(slide => {
	slide.style.width = width;
});

slider.style.position = 'relative';

const stringToIntLength = (width) => {
		return +width.replace(/\D/g, '')
	},

	createDotsList = (indicators) => {
		indicators.forEach((dot) => dot.style.opacity = '.5');
		indicators[slideIndex - 1].style.opacity = 1;
	},

	createSliderPrevButton = (button) => {
		button.addEventListener('click', () => {
			if (offset == 0) {
				offset = stringToIntLength(width) * (slides.length - 1)
			} else {
				offset -= stringToIntLength(width);
			}
			slideField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == 1) {
				slideIndex == slides.length;
			} else {
				slideIndex--;
			}

			if (slides.length < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}
			createDotsList(indicators);
		});
	},

	createSliderNextButton = () => {
		next.addEventListener('click', () => {
			if (offset == (stringToIntLength(width) * (slides.length - 1))) {
				offset = 0;
			} else {
				offset += stringToIntLength(width);
			}

			slideField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == slides.length) {
				slideIndex = 1;
			} else {
				slideIndex++;
			}


			if (slides.length < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}

			createDotsList(indicators);
		});

	};

const dots = document.createElement('ol'),
	indicators = [];


dots.classList.add('carousel-indicators');
slider.append(dots);

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('li');
	dot.setAttribute('data-slide-to', i + 1);
	dot.classList.add('dot')

	if (i == 0) {
		dot.style.opacity = 1;
	}

	dots.append(dot);
	indicators.push(dot);
};


// NEXT-BUTTON-SLIDER
createSliderNextButton(next);


// PREVIOUS-BUTTON-SLIDER
createSliderPrevButton(prev);


indicators.forEach(dot => {
	dot.addEventListener('click', e => {
		const slideTo = e.target.getAttribute('data-slide-to');

		slideIndex = slideTo;
		offset = stringToIntLength(width) * (slideTo - 1)

		slideField.style.transform = `translateX(-${offset}px)`;

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
		createDotsList(indicators);
	})
})



// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;

// } else {
//     total.textContent = slides.length;
// }

// const showSlides = (n) => {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     slides.forEach(item => item.style.display = 'none');
//     slides[slideIndex - 1].style.display = 'block';

//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;

//     } else {
//         current.textContent = slideIndex;
//     }
// }

// const plusSlides = (n) => {
//     showSlides(slideIndex += n);
// }
// prev.addEventListener('click', () => {
//     plusSlides(-1)
// });
// next.addEventListener('click', () => {
//     plusSlides(+1)
// });
// showSlides(slideIndex);

};

export default slider;