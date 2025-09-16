// navbar
document.getElementById("navbar").innerHTML = NavBar();

// Slider automático
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar productos
    ItemListContainer("¡TENDENCIA 🔥!");
  
    // Slider automático
    let slides = document.querySelectorAll(".slide");
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
  });
  