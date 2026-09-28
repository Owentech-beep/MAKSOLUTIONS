// =========================================================
// MAKSOLUTIONS - Main JavaScript
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS animations
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
  });

  // =====================================================
  // NAVBAR ACTIVE LINK
  // =====================================================

  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // =====================================================
  // CLOSE MOBILE NAVBAR AFTER CLICKING A LINK
  // =====================================================

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navbar = document.querySelector("#navbarContent");

      if (navbar.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getInstance(navbar);

        if (collapse) {
          collapse.hide();
        }
      }
    });
  });
});
