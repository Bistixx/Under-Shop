async function ItemListContainer(mensaje) {
  const response = await fetch("data/productos.json");
  const productos = await response.json();
  
    let html = `<h2>${mensaje}</h2><div class="productos-grid">`;
    productos.forEach(p => {
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