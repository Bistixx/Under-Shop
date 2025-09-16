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
  