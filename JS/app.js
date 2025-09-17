// Detectar qué página estamos usando y cargar la navbar correspondiente
const currentPage = window.location.pathname;

if (currentPage.includes('catalogo.html')) {
  // Página del catálogo
  document.getElementById("navbar").innerHTML = NavBarCatalogo();
  
  // Mostrar todos los productos al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
      ItemListContainer("Todos los Productos", "todos");
  });
} else {
  // Página de inicio
  document.getElementById("navbar").innerHTML = NavBar();
  
  // Slider automático para la página de inicio
  document.addEventListener("DOMContentLoaded", () => {
      // Mostrar productos en la página de inicio
      ItemListContainer("¡TENDENCIA 🔥!");
    
      // Slider automático
      let slides = document.querySelectorAll(".slide");
      if (slides.length > 0) {
        let index = 0;
      
        function showSlide(i) {
          slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === i);
          });
        }
      
        setInterval(() => {
          index = (index + 1) % slides.length;
          showSlide(index);
        }, 4000);
      }
  });
}
  
