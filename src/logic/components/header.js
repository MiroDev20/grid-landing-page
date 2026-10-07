export function header() {
    return (
        `
            <header class="header">
            <a
                class="header__brand"
                href="/">
                <img
                    class="header__brand-image"
                    src="assets/images/favicon-32x32.png"
                    alt="">
                <span class="header__brand-text">Bridge Collective</span>
            </a>
                <button
                    class="header__menu-button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="main-navigation"
                    type="button">
                    <img
                        class="header__menu-icon"
                        src="./assets/images/icon-menu.svg"
                        alt="">
                    <img
                        class="header__close-icon"
                        src="./assets/images/icon-close.svg"
                        alt="">
                </button>
            </header>
            <div class="overlay"></div>
        `
    )
}
