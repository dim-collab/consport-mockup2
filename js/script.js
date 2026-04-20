document.addEventListener("DOMContentLoaded", () => {

  // ===== COUNTERS =====
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

  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${(idx - i) * 100}%)`;
      });
    }

    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    if (next && prev) {
      next.onclick = () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      };

      prev.onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      };
    }

    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 5000);

    showSlide(index);
  }

  // ===== MOBILE MENU =====
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});

// NAVBAR SHADOW
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    navbar.style.boxShadow =
      window.scrollY > 50
        ? "0 2px 10px rgba(0,0,0,0.1)"
        : "none";
  }
});

// FADE-IN
if (document.querySelectorAll(".fade-in").length > 0) {
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
}

// ACTIVE MENU
if (sections.length > 0 && navLinks.length > 0) {
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
}
