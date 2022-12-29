import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector(`div.gallery`);
const imagesMarkup = createImages(galleryItems);
imagesList.insertAdjacentHTML(`beforeend`, imagesMarkup);
let currentItem = 0;
function createImages(galleryItems) {
    return galleryItems.map(({ preview, original, description }, index) => {
        return ` <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}" /></a></div>`}).join(``);
};
imagesList.addEventListener(`click`, imagesClick);
function imagesClick(evt) {
  evt.preventDefault()
  currentItem = Number(evt.target.dataset.index)
  const galleryImage = evt.target.classList.contains(`gallery__image`)
  if (!galleryImage) {
    return
    };
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
    instance.show();
    window.addEventListener(`keydown`, closeEscape);

  function closeEscape(evt) {
    if (evt.code === `Escape`) {
      instance.close();
        deleteEventListener();
      };
    };
  function deleteEventListener() {
      window.removeEventListener(`keydown`, closeEscape);
    };
};
console.log(galleryItems);
