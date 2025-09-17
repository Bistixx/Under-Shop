// Renderiza sección de Tendencias en el HOME
(async function renderTrendingSection() {
  // Solo en index.html
  if (!location.pathname.endsWith('index.html') && location.pathname !== '/' && location.pathname !== '\\') return;

  const trendingContainer = document.getElementById('trending');
  if (!trendingContainer) return;

  try {
    // Cargar productos desde DATA local
    const response = await fetch('./DATA/productos.json');
    const productos = await response.json();

    // Criterio de tendencias: top 6 por precio.
    const tendencias = [...productos]
      .sort((a, b) => b.precio - a.precio)
      .slice(0, 6);

    let html = `
      <div class="trending-header">
        <h2>Tendencias</h2>
        <a class="ver-todo" href="./PAGINAS/catalogo.html">Ver todo</a>
      </div>
      <div class="trending-grid">
    `;

    tendencias.forEach(p => {
      html += `
        <article class="trend-card">
          <img class="trend-img" src="${p.imagen}" alt="${p.nombre}">
          <div class="trend-info">
            <h3>${p.nombre}</h3>
            <p class="precio">$${p.precio}</p>
            <a class="btn-ir" href="./PAGINAS/catalogo.html?producto=${p.id}">Ver en catálogo</a>
          </div>
        </article>
      `;
    });

    html += `</div>`;
    trendingContainer.innerHTML = html;
  } catch (err) {
    trendingContainer.innerHTML = '<p style="color:#999">No se pudo cargar la sección de tendencias.</p>';
    console.error('Error cargando tendencias', err);
  }
})();


