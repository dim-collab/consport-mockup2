document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stats h3");

  counters.forEach(counter => {
    let target = parseInt(counter.innerText);
    let count = 0;

    let update = () => {
      count += Math.ceil(target / 50);
      if (count < target) {
        counter.innerText = count;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
      }
    };

    update();
  });
});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => appearOnScroll.observe(el));

// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ACTIVE MENU ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
