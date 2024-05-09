window.addEventListener("DOMContentLoaded", (event) => {
  // Función para verificar la visibilidad de los elementos
  function checkVisibility() {
    var items = document.querySelectorAll(".item");
    items.forEach(function (item) {
      var position = item.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.8) {
        item.classList.add("visible");
      }
    });
  }
  checkVisibility();

  // Función para cambiar el color de la barra de navegación
  function changeNavbarColor() {
    var navbar = document.querySelector(".navbar");
    var aboutSection = document.getElementById("section-about");

    if (aboutSection) {
      var scroll = window.scrollY || window.pageYOffset;
      var aboutSectionTop = aboutSection.offsetTop;
      var navbarHeight = navbar.offsetHeight;

      if (scroll > aboutSectionTop - navbarHeight) {
        navbar.style.backgroundColor = "rgb(43,48,53)";
      } else {
        navbar.style.backgroundColor = "rgb(43,48,53, .1)";
      }
    } else {
      console.log("Elemento #section-about no encontrado");
    }
  }



  // Inicialización de Bootstrap ScrollSpy
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Cierre del menú desplegable al hacer clic en un enlace (responsive)
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Event Listeners
  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("scroll", checkVisibility);

  // Ejecutar funciones al cargar la página

  changeNavbarColor();
});
