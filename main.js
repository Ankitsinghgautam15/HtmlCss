const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; 
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
 
  const current = document.querySelector('.slide--current');

  current.classList.remove('slide--current');
 
  if (current.nextElementSibling) {
  
    current.nextElementSibling.classList.add('slide--current');
  } else {
   
    slides[0].classList.add('slide--current');
  }
  setTimeout(() => current.classList.remove('slide--current'));
};

const prevSlide = () => {
  
  const current = document.querySelector('.slide--current');
 
  current.classList.remove('slide--current');
  
  if (current.previousElementSibling) {
    
    current.previousElementSibling.classList.add('slide--current');
  } else {

    slides[slides.length - 1].classList.add('slide--current');
  }
  setTimeout(() => current.classList.remove('slide--current'));
};


next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});


if (auto) {

  slideInterval = setInterval(nextSlide, intervalTime);
}
