function NavBar() {
    return `
      <h1>Under Shop</h1>
      <nav>
        <a href="./index.html">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>
      ${CartWidget()}
    `;
  }
  
  document.getElementById('navbar').innerHTML = NavBar();

// enlaces de la navbar
const enlaces = document.querySelectorAll('#navbar nav a');

enlaces.forEach(link => {
  // Hover
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#fff';
    link.style.color = '#222';
    link.style.transform = 'scale(1.1)';
    link.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = 'transparent';
    link.style.color = '#fff';
    link.style.transform = 'scale(1)';
    link.style.boxShadow = 'none';
  });

  // Click
  link.addEventListener('mousedown', () => {
    link.style.transform = 'scale(0.95)';
    link.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
  });

  link.addEventListener('mouseup', () => {
    link.style.transform = 'scale(1.1)';
    link.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  });
});
