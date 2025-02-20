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

// Slider de Momentos
const slider = document.querySelector('.moments-slider');
const slides = document.querySelectorAll('.slider-item');
const prevArrow = document.querySelector('.slider-arrow.left');
const nextArrow = document.querySelector('.slider-arrow.right');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

// Modal para fotos
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

const closeModal = document.createElement('span');
closeModal.classList.add('close-modal');
closeModal.innerHTML = '&times;';
modal.appendChild(closeModal);

document.querySelectorAll('.moment-photo').forEach(photo => {
    photo.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = photo.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Menú Hamburguesa
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });
});
