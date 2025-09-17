# 🛒 Under Shop - Landing E-commerce

Proyecto de landing page para un e-commerce, creado con **HTML, CSS, JavaScript y JSON**.  
Simula la estructura de componentes de React (NavBar, CartWidget, ItemListContainer y Catálogo) usando JS.

---

## 📌 Características

- **NavBar** (inicio) y **NavBar de Catálogo** (con filtros)
- **CartWidget**
- **Slider** de imágenes con mensajes
- **Sección de Tendencias** independiente del catálogo (home)
- **Catálogo** con filtros por categoría y render dinámico
- **Productos cargados desde JSON** (`DATA/productos.json`)
- **Deep link a producto**: desde Tendencias, el botón “Ver en catálogo” abre el producto específico en `catalogo.html`
- **Footer fijo** en todas las páginas, con:
  - © 2025 Under Shop
  - Teléfono: 341 624 8716 (linkeado)
  - Botón de Instagram (placeholder para tu URL)

---

## 📂 Estructura del proyecto

/
├── index.html
├── /CSS
│   └── style.css
├── /JS
│   ├── app.js
│   ├── navbar.js
│   ├── navbarCatalogo.js
│   ├── cartWidget.js
│   ├── itemListContainer.js
│   ├── catalogo.js
│   └── trending.js
├── /DATA
│   └── productos.json
├── /PAGINAS
│   └── catalogo.html
└── /IMG
    └── (imágenes del sitio)

---

## ⚙️ Tecnologías usadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **JSON**

---

## 🚀 Ejecución (necesario servidor local)

Como se consumen archivos JSON con `fetch`, es necesario servir el sitio con un servidor local (abrir `index.html` directamente puede fallar por CORS).

Opciones rápidas:

1) VS Code Live Server (recomendado)
- Abrí la carpeta del proyecto en VS Code
- Clic derecho sobre `index.html` → “Open with Live Server”

2) Python (si tenés Python instalado)
- Desde la carpeta del proyecto:
  - Python 3: `python -m http.server 5500`
- Abrí `http://localhost:5500/index.html`