// Función para mostrar productos filtrados
async function ItemListContainer(mensaje, categoria = "todos") {
    const response = await fetch("../DATA/productos.json");
    const productos = await response.json();

    let productosFiltrados = categoria === "todos"
        ? productos
        : productos.filter(p => p.categoria === categoria);

    let html = `<h2>${mensaje}</h2><div class="productos-grid">`;
    productosFiltrados.forEach(p => {
        html += `
        <div class="product">
          <img src="${p.imagen}" alt="${p.nombre}" class="product-img">
          <h3>${p.nombre}</h3>
          <p>Precio: $${p.precio}</p>
          <button class="btn-comprar">Comprar</button>
        </div>
        `;
    });
    html += `</div>`;

    document.getElementById("content").innerHTML = html;
}

// Función para filtrar productos por categoría
async function filtrarProductos(categoria) {
    if (categoria.toLowerCase() === 'todos') {
        await ItemListContainer("Todos los Productos", "todos");
    } else {
        const categoriaCapitalizada = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        await ItemListContainer(`Productos de ${categoriaCapitalizada}`, categoriaCapitalizada);
    }
}

