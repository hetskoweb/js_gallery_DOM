'use strict';

const mainImage = document.getElementById('largeImg');
const images = document.getElementById('thumbs');

images.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const link = e.target.closest('a');

    if (link) {
      mainImage.src = link.href;
    }
  }
});
