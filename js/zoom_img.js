
const images = document.querySelectorAll('.mood1, .mood2');

images.forEach(function(img) {
  img.addEventListener('click', function() {
    img.classList.toggle('zoomed'); 
  });
});
