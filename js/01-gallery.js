import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    
    const markup = `<div><img src="${item.preview}" alt="${item.description}"width ="372px" height="240"></div>`;
    gallery.innerHTML += markup;

})

const originalImage = () => {
    
    gallery.innerHTML = `<div><img src="${item.original}" alt="${item.description}"width ="372px" height="240"></div>`;

}
gallery.addEventListener('click',originalImage)
console.log(gallery)
console.log(galleryItems);
