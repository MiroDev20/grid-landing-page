const button = document.querySelector('.header__menu-button');

button.addEventListener('click', () => {
    button.classList.toggle('header__menu-button--open');
    button.ariaExpanded = button.classList.contains('header__menu-button--open');
});
