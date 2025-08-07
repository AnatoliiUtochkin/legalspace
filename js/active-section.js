const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let currentSection = null;
  const scrollY = window.pageYOffset;

  if (scrollY === 0) {
    currentSection = "about";
  } else {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 110;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").substring(1);
    link.classList.toggle("active", href === currentSection);
  });
});
