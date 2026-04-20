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
