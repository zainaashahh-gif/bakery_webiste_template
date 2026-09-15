// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Simple scroll animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(section => {
  observer.observe(section);
});