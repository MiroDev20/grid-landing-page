import { header } from "./components/header.js";
import { main } from "./components/main.js";
import { footer } from "./components/footer.js";
import { menu } from "./components/menu.js";

const body = document.querySelector('body');

body.innerHTML += (header() + main() + footer());

menu();
