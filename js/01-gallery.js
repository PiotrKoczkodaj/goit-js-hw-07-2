import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    
    const markup = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`

    gallery.innerHTML += markup;

});

gallery.onclick = (e) => {
  e.preventDefault();

 const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`).show();

  const modal = document.querySelector('.basicLightbox');
  window.addEventListener('keydown',(e)=>{console.log(e.code)})
  console.log(e)
  if (e.code === 'Escape') {
    modal.style.display = 'none';
}
}



