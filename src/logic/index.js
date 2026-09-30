const button = document.querySelector('.header__menu-button');
const navbar = document.querySelector('.navbar');

button.addEventListener('click', () => {
    button.classList.toggle('header__menu-button--open');
    navbar.classList.toggle('navbar--open');
    button.ariaExpanded = button.classList.contains('header__menu-button--open');
});
