function NavBarCatalogo() {
    // Lista de categorías para los filtros
    const categorias = ['todos', 'Combos', 'Conjuntos', 'Buzos', 'Remeras', 'Pantalones', 'Zapatillas', 'Gorras'];
  
    // Crear los botones como HTML
    const filtrosHTML = categorias.map(categoria => {
      return `<button class="filtro-btn" data-categoria="${categoria}" 
                style="padding:8px 12px; border:none; border-radius:6px; 
                       background:#444; color:#fff; cursor:pointer; transition:0.3s;">
                ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>`;
    }).join('');
  
    return `
      <div class="navbar-left">
        <h1>Under Shop</h1>
        <nav>
          <a href="../index.html">Inicio</a>
          <a href="javascript:void(0)" id="productos-link">Productos</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
      
      <div class="navbar-right">
        ${CartWidget()}
        <!-- Botón hamburguesa -->
        <div id="menu-hamburguesa" style="cursor:pointer; font-size:28px; color:white; margin-left:15px;">
          &#9776;
        </div>
      </div>
  
      <!-- Contenedor oculto de filtros (flotante) -->
      <div id="filtros" style="
          display:none; 
          flex-direction:column; 
          gap:10px; 
          background:#222; 
          padding:15px; 
          border-radius:10px;
          position:absolute;
          top:70px;  /* debajo del navbar */
          right:20px; /* pegado al borde derecho */
          z-index:1000;
          min-width:150px;
        ">
        ${filtrosHTML}
      </div>
    `;
  }
  
  document.getElementById('navbar').innerHTML = NavBarCatalogo();
  
  // Event listener para el enlace de Productos
  setTimeout(() => {
    const productosLink = document.getElementById('productos-link');
    if (productosLink) {
      productosLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        ItemListContainer("Todos los Productos", "todos");
      });
    }
  }, 200);
  
  // enlaces de la navbar
  const enlaces = document.querySelectorAll('#navbar nav a');
  enlaces.forEach(link => {
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
  
    link.addEventListener('mousedown', () => {
      link.style.transform = 'scale(0.95)';
      link.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    });
  
    link.addEventListener('mouseup', () => {
      link.style.transform = 'scale(1.1)';
      link.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });
  });
  
  // funcionalidad de los botones de filtro
  setTimeout(() => {
    const botonesFiltros = document.querySelectorAll('.filtro-btn');
    botonesFiltros.forEach(boton => {
      boton.addEventListener('click', () => {
        const categoria = boton.getAttribute('data-categoria');
        filtrarProductos(categoria); // tu función para filtrar productos
      });

      // Estilo hover
      boton.addEventListener('mouseenter', () => {
        boton.style.backgroundColor = '#fff';
        boton.style.color = '#222';
        boton.style.transform = 'scale(1.05)';
        boton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
      });

      boton.addEventListener('mouseleave', () => {
        boton.style.backgroundColor = '#444';
        boton.style.color = '#fff';
        boton.style.transform = 'scale(1)';
        boton.style.boxShadow = 'none';
      });
    });
  }, 100);
  
  // funcionalidad del menú hamburguesa
  setTimeout(() => {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const filtrosContainer = document.getElementById('filtros');
    
    if (menuHamburguesa && filtrosContainer) {
      menuHamburguesa.addEventListener('click', () => {
        filtrosContainer.style.display =
          (filtrosContainer.style.display === 'none' || filtrosContainer.style.display === '')
            ? 'flex'
            : 'none';
      });
    }
  }, 100);
  
  