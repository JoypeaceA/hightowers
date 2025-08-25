document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-3");
  const elements = section.querySelectorAll("img, h4, p, .now");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elements.forEach(el => el.classList.add("animate"));
        observer.unobserve(section); // run once only
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});

const navLink = document.getElementById("nav-links");
const menuToggle = document.getElementById("menu-toggle");
const icon = document.getElementById("bar");
const navItems = document.querySelectorAll("#nav-links a")

menuToggle.addEventListener("click", () => {
  navLink.classList.toggle("show");

  if(icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
  else{
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLink.classList.remove("show");

    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});
});