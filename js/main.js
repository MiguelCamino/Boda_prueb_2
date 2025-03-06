// Countdown Timer
const weddingDate = new Date('2025-07-05').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(updateCountdown, 1000);

// Slider para Historia de Amor
const storySlider = document.querySelector('.story-slider');
const storySlides = document.querySelectorAll('.story-slide');
const storyPrevArrow = document.querySelector('.story-arrow.left');
const storyNextArrow = document.querySelector('.story-arrow.right');
let storyCurrentIndex = 0;

function showStorySlide(index) {
    storySlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

storyPrevArrow.addEventListener('click', () => {
    storyCurrentIndex = (storyCurrentIndex > 0) ? storyCurrentIndex - 1 : storySlides.length - 1;
    showStorySlide(storyCurrentIndex);
});

storyNextArrow.addEventListener('click', () => {
    storyCurrentIndex = (storyCurrentIndex < storySlides.length - 1) ? storyCurrentIndex + 1 : 0;
    showStorySlide(storyCurrentIndex);
});

// Slider para Momentos (infinito)
const momentsSlider = document.querySelector('.moments-slider');
const momentsSlides = document.querySelectorAll('.moments-slide');
const momentsPrevArrow = document.querySelector('.moments-arrow.left');
const momentsNextArrow = document.querySelector('.moments-arrow.right');
let momentsCurrentIndex = 0;

function showMomentsSlide(index) {
    momentsSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
           
