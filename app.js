const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Change current image to source of clicked image
  current.src = e.target.src;


}