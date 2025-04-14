const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');



burger.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

function toggleMenu() {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
}
