document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    "../Episodios/1 - A entrevista de Bongo/0.jpg",
    "../Episodios/1 - A entrevista de Bongo/1.jpg",
    "../Episodios/1 - A entrevista de Bongo/2.jpg",
    "../Episodios/1 - A entrevista de Bongo/3.jpg",
    "../Episodios/1 - A entrevista de Bongo/4.jpg",
    "../Episodios/1 - A entrevista de Bongo/5.jpg",
    "../Episodios/1 - A entrevista de Bongo/6.jpg",
    "../Episodios/1 - A entrevista de Bongo/7.jpg",
    "../Episodios/1 - A entrevista de Bongo/8.jpg",
    "../Episodios/1 - A entrevista de Bongo/9.jpg",
    "../Episodios/1 - A entrevista de Bongo/10.jpg",
    "../Episodios/1 - A entrevista de Bongo/11.jpg",
    "../Episodios/1 - A entrevista de Bongo/13.jpg",
    "../Episodios/1 - A entrevista de Bongo/14.jpg",
    "../Episodios/1 - A entrevista de Bongo/15.jpg",
    "../Episodios/1 - A entrevista de Bongo/16.jpg",
    "../Episodios/1 - A entrevista de Bongo/17.jpg",
    "../Episodios/1 - A entrevista de Bongo/18.jpg",
    

  ];

  let current = 0;
  let scale = 1;
  const scaleStep = 0.2;
  const maxScale = 3;
  const minScale = 1;

  const viewer = document.getElementById("comic-viewer");
  const wrapper = document.getElementById("comic-wrapper");
  const strip = document.getElementById("comic-strip");
  const viewerImg = document.getElementById("comic-image");
  const prevImg = document.getElementById("prev-page");
  const nextImg = document.getElementById("next-page");
  const thumbs = document.querySelectorAll(".comic-thumb");
  const closeBtn = document.getElementById("comic-close");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let startX, startY;

  // Abrir leitor ao clicar
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      current = index;
      updatePages();
      viewer.style.display = "flex";
      resetTransform();
    });
  });

  // Fechar
  closeBtn.addEventListener("click", () => viewer.style.display = "none");
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") viewer.style.display = "none";
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
  });

  nextBtn.addEventListener("click", nextPage);
  prevBtn.addEventListener("click", prevPage);

  function nextPage() {
    current = (current + 1) % pages.length;
    updatePages();
    resetTransform();
  }

  function prevPage() {
    current = (current - 1 + pages.length) % pages.length;
    updatePages();
    resetTransform();
  }

  function updatePages() {
    viewerImg.src = pages[current];
    prevImg.src = pages[(current - 1 + pages.length) % pages.length];
    nextImg.src = pages[(current + 1) % pages.length];
  }

  function resetTransform() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
    updateTransform();
  }

  function updateTransform() {
    viewerImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  }

  // Zoom progressivo
  wrapper.addEventListener("wheel", e => {
    e.preventDefault();
    scale += e.deltaY < 0 ? scaleStep : -scaleStep;
    scale = Math.min(maxScale, Math.max(minScale, scale));
    updateTransform();
  });

  // Pan da imagem
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
    updateTransform();
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    viewerImg.style.cursor = scale > 1 ? "grab" : "default";
  });
});
