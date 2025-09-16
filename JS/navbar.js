function NavBar() {
    return `
      <h1>Under Shop</h1>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>
      ${CartWidget()}
    `;
  }
  