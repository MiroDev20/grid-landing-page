import { stat } from "./stat.js";
import { navbarItem } from "./navbar-item.js";

export function main() {
  return `
    <main class="hero">
        <nav
            id="main-navigation"
            class="navbar">
            <ul class="navbar__list">
                ${navbarItem("About")}
                ${navbarItem("Our Work")}
                ${navbarItem("Partners")}
                ${navbarItem("Annual Report")}
                ${navbarItem("Donate")}
            </ul>
        </nav>

        <section class="hero__presentation">
            <h1 class="hero__title">A classroom for every child.</h1>
            <p class="hero__description">
                We fund the schools, train the teachers, and measure what works — so every child we reach today becomes a graduate tomorrow.
            </p>
        </section>

        <section class="hero__stats">
            <dl class="hero__stats-list">
                ${stat(
                    "Students reached",
                    "./assets/images/icon-sparkle.svg",
                    "2.4M",
                    "Across 31 countries since 2011."
                )}
                ${stat(
                    "Schools partnered",
                    "./assets/images/icon-plus.svg",
                    "1,284",
                    "In 14 countries, from Kenya to Guatemala."
                )}
                ${stat(
                    "Teachers trained",
                    "./assets/images/icon-arrow-right.svg",
                    "38K",
                    "Equipped with modern tools and methodology."
                )}
                ${stat(
                    "Graduation lift",
                    "./assets/images/icon-trending-up.svg",
                    "3.1×",
                    "Partner schools outperform national averages 3x."
                )}
            </dl>
        </section>
    </main>
    `
}
