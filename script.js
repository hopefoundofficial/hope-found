document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Navbar shadow on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 4px 15px rgba(0,0,0,.2)";
    } else {
      nav.style.boxShadow = "none";
    }
  });

});
