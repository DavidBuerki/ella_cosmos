import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Fermer le menu quand on clique un lien (mobile)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}
