document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  const preloader = document.getElementById("preloader");
  const preloaderText = document.getElementById("preloader-text");

  if (preloader && preloaderText) {
    preloaderText.textContent = "Wait for it...";
    setTimeout(() => {
      preloaderText.textContent = "Wait for it... wait for it...";
    }, 700);
    setTimeout(() => {
      preloaderText.textContent = "Legendary.";
    }, 1400);
    setTimeout(() => {
      preloader.classList.add("hide");
    }, 2000);
  }

  const tiltTarget = document.querySelector(".tilt-target");
  if (tiltTarget) {
    tiltTarget.addEventListener("mouseenter", () => {
      tiltTarget.classList.add("tilt-active");
    });
    tiltTarget.addEventListener("mouseleave", () => {
      tiltTarget.classList.remove("tilt-active");
    });
  }

  const sparkleText = document.querySelector(".sparkle-text");
  if (sparkleText) {
    sparkleText.addEventListener("mouseenter", () => {
      sparkleText.classList.add("sparkle-active");
      setTimeout(() => sparkleText.classList.remove("sparkle-active"), 1000);
    });
  }
});
