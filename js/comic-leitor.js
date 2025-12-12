document.addEventListener("DOMContentLoaded", () => {

  const viewer = document.getElementById("comic-viewer");
  const gallery = document.querySelector(".comic-gallery");
  const folder = viewer.dataset.folder;

  let pages = [];
  let current = 0;

  // Controle de zoom/pan
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  const maxScale = 4;
  const minScale = 1;

  // ================================
  // 1. CARREGAR PÁGINAS AUTOMATICAMENTE
  // ================================
  async function loadPages() {
    let index = 0;
    pages = [];

    while (true) {
      const url = `${folder}/${index}.jpg`;

      const exists = await imageExists(url);
      if (!exists) break;

      pages.push(url);
      index++;
    }

    if (pages.length === 0) {
      console.error("Nenhuma página encontrada:", folder);
      return false;
    }

    return true;
  }

  function imageExists(url) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  // ================================
  // 2. GERAR MINIATURAS NA TELA
  // ================================
  async function makeThumbnails() {
    const ok = await loadPages();
    if (!ok) return;

    gallery.innerHTML = "";

    pages.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("comic-thumb");
      img.dataset.index = i;

      img.addEventListener("click", () => openReader(i));

      gallery.appendChild(img);
    });
  }

  // ================================
  // 3. ABRIR LEITOR AO CLICAR
  // ================================
  function openReader(index) {
    current = index;

    viewer.innerHTML = `
      <span id="comic-close">×</span>
      <span class="comic-nav prev">‹</span>

      <div id="comic-wrapper">
        <div id="comic-strip">
          <img id="prev-page" class="side-page">
          <img id="comic-image">
          <img id="next-page" class="side-page">
        </div>
      </div>

      <span class="comic-nav next">›</span>
    `;

    viewer.style.display = "flex";

    viewerImg = document.getElementById("comic-image");
    prevImg = document.getElementById("prev-page");
    nextImg = document.getElementById("next-page");

    resetZoom();
    updatePages();
    addControls();
    addZoomPan();
  }

  // Atualiza páginas
  function updatePages() {
    viewerImg.src = pages[current];
    prevImg.src = pages[(current - 1 + pages.length) % pages.length];
    nextImg.src = pages[(current + 1) % pages.length];
  }

  // ================================
  // 4. NAVEGAÇÃO DO LEITOR
  // ================================
  function addControls() {
    document.querySelector(".next").onclick = () => {
      current = (current + 1) % pages.length;
      updatePages();
      resetZoom();
    };

    document.querySelector(".prev").onclick = () => {
      current = (current - 1 + pages.length) % pages.length;
      updatePages();
      resetZoom();
    };

    document.getElementById("comic-close").onclick = () => {
      viewer.style.display = "none";
    };

    document.addEventListener("keydown", e => {
      if (viewer.style.display !== "flex") return;

      if (e.key === "ArrowRight") {
        current = (current + 1) % pages.length;
        updatePages();
        resetZoom();
      }
      if (e.key === "ArrowLeft") {
        current = (current - 1 + pages.length) % pages.length;
        updatePages();
        resetZoom();
      }
      if (e.key === "Escape") viewer.style.display = "none";
    });
  }

  // ================================
  // 5. ZOOM + PAN (ARRASTAR)
  // ================================
  function addZoomPan() {
    const wrapper = document.getElementById("comic-wrapper");

    wrapper.addEventListener("wheel", e => {
      e.preventDefault();

      const oldScale = scale;

      scale += e.deltaY < 0 ? 0.15 : -0.15;
      scale = Math.max(minScale, Math.min(maxScale, scale));

      // manter posição consistente no zoom
      const rect = viewerImg.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width;
      const dy = (e.clientY - rect.top) / rect.height;

      offsetX -= (dx * viewerImg.width) * (scale - oldScale) / 2;
      offsetY -= (dy * viewerImg.height) * (scale - oldScale) / 2;

      applyTransform();
    });

    viewerImg.addEventListener("mousedown", e => {
      if (scale <= 1) return;

      isDragging = true;
      startX = e.clientX - offsetX;
      startY = e.clientY - offsetY;

      viewerImg.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", e => {
      if (!isDragging) return;
      offsetX = e.clientX - startX;
      offsetY = e.clientY - startY;
      applyTransform();
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      viewerImg.style.cursor = scale > 1 ? "grab" : "default";
    });
  }

  function applyTransform() {
    viewerImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  }

  function resetZoom() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
    applyTransform();
  }

  // ================================
  // 6. INICIAR: CRIAR MINIATURAS
  // ================================
  makeThumbnails();

});
