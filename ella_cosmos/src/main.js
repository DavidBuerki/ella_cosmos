import "./style.css";

function start() {
  // Reveal au scroll (sections seulement)
  const reveals = document.querySelectorAll(".section .reveal");

  if (reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Important : on laisse le navigateur peindre AVANT d'ajouter la classe
            requestAnimationFrame(() => {
              entry.target.classList.add("is-in");
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => io.observe(el));
  }

  // Reveal du hero (après le 1er paint, donc perceptible)
  const heroFrame = document.querySelector(".hero__frame.reveal");
  const heroText = document.querySelector(".hero__text.reveal");

  requestAnimationFrame(() => {
    if (heroFrame) setTimeout(() => heroFrame.classList.add("is-in"), 250);
    if (heroText) setTimeout(() => heroText.classList.add("is-in"), 500);
  });
}

// Si jamais le module est évalué après DOMContentLoaded (HMR / cache), on démarre quand même
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
