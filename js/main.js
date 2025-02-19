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

