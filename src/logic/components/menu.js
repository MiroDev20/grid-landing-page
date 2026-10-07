export function menu() {
    const button = document.querySelector('.header__menu-button');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');

    button.addEventListener('click', () => {
        button.classList.toggle('header__menu-button--open');
        button.ariaExpanded = button.classList.contains('header__menu-button--open');
        navbar.classList.toggle('navbar--open');
        overlay.classList.toggle('overlay--open');
    });
}
