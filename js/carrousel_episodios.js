let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesToShow = 3; // quantos slides aparecem ao mesmo tempo

document.querySelector('.next').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > totalSlides - slidesToShow) {
    currentIndex = 0; // volta para o início
  }
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesToShow; // vai para o final
  }
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = 100 / slidesToShow; // largura de cada slide em %
  const offset = -(currentIndex * slideWidth);
  carousel.style.transform = `translateX(${offset}%)`;
}
