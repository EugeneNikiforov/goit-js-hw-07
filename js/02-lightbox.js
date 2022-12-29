import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector(`ul.gallery`);
const imagesMarkup = createImages(galleryItems);
imagesList.insertAdjacentHTML(`beforeend`, imagesMarkup);

function createImages(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`}).join(``);
};
imagesList.addEventListener(`click`, imagesClick);

function imagesClick(evt) {
    evt.preventDefault();
    const galleryImage = evt.target.classList.contains(`gallery__item`);
    if (!galleryImage) {
        return;
    };
};
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
});
console.log(galleryItems);
