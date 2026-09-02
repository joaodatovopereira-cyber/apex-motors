/* ==========================================================================
   MOCK DATA (CATÁLOGO DE MOTOCICLETAS)
   ========================================================================== */
const motorcycles = [
  {
    id: "1",
    name: "Yamaha MT-09",
    brand: "Yamaha",
    category: "Naked",
    year: 2023,
    km: 4500,
    engine: "890 cc",
    price: 58900,
    status: "Destaque",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    description: "A Dark Side of Japan em sua versão mais agressiva. Equipada com motor CP3 de 3 cilindros e pacote eletrônico completo."
  },
  {
    id: "2",
    name: "BMW S1000RR",
    brand: "BMW",
    category: "Esportiva",
    year: 2024,
    km: 0,
    engine: "999 cc",
    price: 124900,
    status: "Oferta",
    image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80",
    description: "Alta performance pura. Moto zero quilômetro com quickshifter bidirecional e múltiplos modos de pilotagem."
  },
  {
    id: "3",
    name: "Honda CRF 1100L Africa Twin",
    brand: "Honda",
    category: "Trail",
    year: 2022,
    km: 12000,
    engine: "1084 cc",
    price: 79900,
    status: "Disponivel",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    description: "Pronta para qualquer terreno. Aventureira consagrada com transmissão DCT e suspensão ajustável."
  },
  {
    id: "4",
    name: "Kawasaki Z900",
    brand: "Kawasaki",
    category: "Naked",
    year: 2023,
    km: 8200,
    engine: "948 cc",
    price: 54900,
    status: "Disponivel",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
    description: "Estilo Sugomi marcante com entrega de potência suave e controle de tração avançado."
  },
  {
    id: "5",
    name: "Harley-Davidson Iron 883",
    brand: "Harley-Davidson",
    category: "Custom",
    year: 2021,
    km: 15000,
    engine: "883 cc",
    price: 49900,
    status: "Destaque",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Ícone do estilo urbano minimalista. Motor Evolution V-Twin refrigerado a ar."
  },
  {
    id: "6",
    name: "BMW C 400 X",
    brand: "BMW",
    category: "Scooter",
    year: 2023,
    km: 2100,
    engine: "350 cc",
    price: 42900,
    status: "Disponivel",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=800&q=80",
    description: "Mobilidade urbana com conforto premium, conectividade smartphone e controle de estabilidade."
  },
  {
    id: "7",
    name: "Ducati Panigale V4 S",
    brand: "Ducati",
    category: "Esportiva",
    year: 2023,
    km: 3100,
    engine: "1103 cc",
    price: 162000,
    status: "Destaque",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    description: "Tecnologia derivada diretamente da MotoGP. Suspensões Öhlins eletrônicas e asas aerodinâmicas."
  },
  {
    id: "8",
    name: "Honda CB 650R",
    brand: "Honda",
    category: "Street",
    year: 2022,
    km: 9500,
    engine: "649 cc",
    price: 47500,
    status: "Oferta",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
    description: "Design Neo Sports Café com o clássico ronco do motor de 4 cilindros em linha."
  }
];

/* ==========================================================================
   DOM INITIALIZATION & GLOBAL LOGIC
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  
  // Renderizadores por página
  if (document.getElementById("catalog-grid")) initCatalog();
  if (document.getElementById("featured-grid")) initFeatured();
  if (document.getElementById("details-container")) initDetails();
  if (document.getElementById("contact-form")) initContactForm();
});

/* Mobile Menu Toggle */
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
}

/* Helper para renderizar card único */
function renderCardHTML(moto) {
  const badgeClasses = {
    Destaque: "badge-destaque",
    Oferta: "badge-oferta",
    Disponivel: "badge-disponivel"
  };

  return `
    <article class="card">
      <div class="card-img-wrapper">
        <img src="${moto.image}" alt="${moto.name}" class="card-img" loading="lazy">
        <span class="badge ${badgeClasses[moto.status]}">${moto.status}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${moto.name}</h3>
        <div class="card-specs">
          <span>Ano: ${moto.year}</span>
          <span>KM: ${moto.km.toLocaleString('pt-BR')}</span>
          <span>Cilindrada: ${moto.engine}</span>
          <span>Categoria: ${moto.category}</span>
        </div>
        <div class="card-price">R$ ${moto.price.toLocaleString('pt-BR')}</div>
        <a href="detalhes.html?id=${moto.id}" class="btn btn-primary" style="width: 100%;">Ver detalhes</a>
      </div>
    </article>
  `;
}

/* ==========================================================================
   HOMEPAGE LOGIC
   ========================================================================== */
function initFeatured() {
  const container = document.getElementById("featured-grid");
  const featuredMotos = motorcycles.filter(m => m.status === "Destaque" || m.status === "Oferta").slice(0, 3);
  container.innerHTML = featuredMotos.map(m => renderCardHTML(m)).join("");
}

/* ==========================================================================
   CATALOG PAGE LOGIC
   ========================================================================== */
function initCatalog() {
  const grid = document.getElementById("catalog-grid");
  const searchInput = document.getElementById("search-input");
  const brandSelect = document.getElementById("filter-brand");
  const categorySelect = document.getElementById("filter-category");

  function filterMotos() {
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    const brand = brandSelect ? brandSelect.value : "";
    const category = categorySelect ? categorySelect.value : "";

    const filtered = motorcycles.filter(moto => {
      const matchesSearch = moto.name.toLowerCase().includes(query) || moto.brand.toLowerCase().includes(query);
      const matchesBrand = brand === "" || moto.brand === brand;
      const matchesCategory = category === "" || moto.category === category;
      return matchesSearch && matchesBrand && matchesCategory;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">Nenhuma motocicleta encontrada com os filtros selecionados.</p>`;
    } else {
      grid.innerHTML = filtered.map(m => renderCardHTML(m)).join("");
    }
  }

  if (searchInput) searchInput.addEventListener("input", filterMotos);
  if (brandSelect) brandSelect.addEventListener("change", filterMotos);
  if (categorySelect) categorySelect.addEventListener("change", filterMotos);

  // Render inicial
  filterMotos();
}

/* ==========================================================================
   DETAILS PAGE LOGIC
   ========================================================================== */
function initDetails() {
  const container = document.getElementById("details-container");
  const urlParams = new URLSearchParams(window.location.search);
  const motoId = urlParams.get("id") || "1"; // Fallback para id 1

  const moto = motorcycles.find(m => m.id === motoId) || motorcycles[0];

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
      <div>
        <img src="${moto.image}" id="main-image" alt="${moto.name}" style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color); height: 400px; object-fit: cover;">
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <img src="${moto.image}" class="thumb" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid var(--accent-red);" onclick="document.getElementById('main-image').src=this.src">
          <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80" class="thumb" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; opacity: 0.7;" onclick="document.getElementById('main-image').src=this.src">
        </div>
      </div>
      <div>
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">${moto.name}</h1>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Marca: ${moto.brand} | Categoria: ${moto.category}</p>
        <div style="font-size: 2.25rem; font-weight: 800; color: var(--accent-red); margin-bottom: 2rem;">R$ ${moto.price.toLocaleString('pt-BR')}</div>
        
        <div style="background-color: var(--bg-card); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Especificações</h3>
          <p><strong>Ano:</strong> ${moto.year}</p>
          <p><strong>Quilometragem:</strong> ${moto.km.toLocaleString('pt-BR')} km</p>
          <p><strong>Cilindrada:</strong> ${moto.engine}</p>
          <p><strong>Status:</strong> ${moto.status}</p>
        </div>

        <p style="margin-bottom: 2rem; color: var(--text-secondary);">${moto.description}</p>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="contato.html?moto=${encodeURIComponent(moto.name)}" class="btn btn-primary" style="flex: 1;">Tenho Interesse</a>
          <a href="https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20na%20${encodeURIComponent(moto.name)}" target="_blank" class="btn btn-outline" style="flex: 1; border-color: #25D366; color: #25D366;">WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   CONTACT FORM LOGIC
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const urlParams = new URLSearchParams(window.location.search);
  const motoParam = urlParams.get("moto");

  if (motoParam && document.getElementById("moto-interest")) {
    document.getElementById("moto-interest").value = motoParam;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Validação simples
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      feedback.innerHTML = `<div style="padding: 1rem; background-color: #ef4444; color: white; border-radius: 4px; margin-top: 1rem;">Por favor, preencha todos os campos obrigatórios.</div>`;
      return;
    }

    feedback.innerHTML = `<div style="padding: 1rem; background-color: #22c55e; color: white; border-radius: 4px; margin-top: 1rem;">Mensagem enviada com sucesso! Um de nossos consultores entrará em contato.</div>`;
    form.reset();
  });
}