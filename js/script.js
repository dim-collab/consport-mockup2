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
