// Detectar qué página estamos usando y cargar la navbar correspondiente
const currentPage = window.location.pathname;

if (currentPage.includes('catalogo.html')) {
  // Página del catálogo
  document.getElementById("navbar").innerHTML = NavBarCatalogo();
  
  // Mostrar productos al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
      // Verificar si hay un parámetro de producto específico
      const urlParams = new URLSearchParams(window.location.search);
      const productoId = urlParams.get('producto');
      
      if (productoId) {
          ItemListContainer("Producto", "todos", productoId);
      } else {
          ItemListContainer("Todos los Productos", "todos");
      }
  });
} else {
  // Página de inicio
  document.getElementById("navbar").innerHTML = NavBar();
  
  // Slider automático para la página de inicio
  document.addEventListener("DOMContentLoaded", () => {
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
  
