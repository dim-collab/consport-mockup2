document.addEventListener("DOMContentLoaded", () => {

  // ===== COUNTERS =====
  const counters = document.querySelectorAll(".stats h3");

  counters.forEach(counter => {
    let original = counter.innerText;
    let target = parseInt(original);
    let suffix = original.includes('%') ? '%' : '+';

    let count = 0;

    let update = () => {
      count += Math.ceil(target / 50);
      if (count < target) {
        counter.innerText = count;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + suffix;
      }
    };

    update();
  });

  // ===== NAVBAR FOOTER BLEND (KDF STYLE) =====
  const navbar = document.querySelector(".navbar");
  const targetSection = document.querySelector(".why-consport");

  if (navbar && targetSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio > 0.8) {
        navbar.classList.add("at-footer");
      } else {
        navbar.classList.remove("at-footer");
      }
    },
    {
      threshold: [0.8]
    }
  );

  observer.observe(targetSection);
}

  // ===== HIDE CTA AT PAGE BOTTOM =====
const cta = document.querySelector(".cta");

window.addEventListener("scroll", () => {

  const scrollPosition =
    window.innerHeight + window.scrollY;

  const pageBottom =
    document.body.offsetHeight - 120;

  if (scrollPosition >= pageBottom) {
    cta?.classList.add("hide-cta");
  } else {
    cta?.classList.remove("hide-cta");
  }

});
  
  // ===== NAVBAR SCROLL CLASS =====
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

});

  // ===== HERO SLIDER =====
 const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
let interval;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
  index = i;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// autoplay
function startAuto() {
  interval = setInterval(nextSlide, 5000);
}

function stopAuto() {
  clearInterval(interval);
}

// buttons
nextBtn?.addEventListener("click", () => {
  nextSlide();
  stopAuto();
  startAuto();
});

prevBtn?.addEventListener("click", () => {
  prevSlide();
  stopAuto();
  startAuto();
});

// keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

// init
showSlide(0);
startAuto();

  // ===== MOBILE MENU =====
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // ===== CLOSE MENU ON CLICK =====
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
       if (nav) nav.classList.remove("active");
    });
  });

  // ===== ACTIVE MENU (SMOOTH / PRO) =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (sections.length > 0 && navLinks.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            navLinks.forEach(link => {
              link.classList.remove("active");

              if (link.getAttribute("href") === "#" + entry.target.id) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px -40% 0px"
      }
    );

    sections.forEach(section => observer.observe(section));
  }

// ===== FADE-IN =====
const faders = document.querySelectorAll(".fade-in");

if (faders.length > 0) {
  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 🔥 run once only
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => appearOnScroll.observe(el));
}
  
