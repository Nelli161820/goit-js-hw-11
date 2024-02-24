// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import { fetchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';



document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const searchQuery = document.getElementById('searchInput').value.trim();
  if (searchQuery) {
    
    fetchImages(searchQuery).then(data => {
      
      if (data.hits.length > 0) {
        displayImages(data.hits);
      } else {
        displayError();
      }
    });
  }
});



function displayError() {
  iziToast.error({
        message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
function clearGallery() {
  let gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  
}
clearGallery();

// Функція для створення картки зображення
function createImageCard(image) {
  let card = document.createElement('div');
  card.innerHTML = `<a href="${image.largeImageURL}" target="_blank">
      <img src="${image.webformatURL}" alt="${image.tags}">
    </a>
    <p>Likes: ${image.likes}</p>
    <p>Views: ${image.views}</p>
    <p>Comments: ${image.comments}</p>
    <p>Downloads: ${image.downloads}</p>`;
  return card;
  
}



// Додавання нових карток зображень до галереї
function addImagesToGallery(images) {
  let gallery = document.querySelector('.gallery');
  let htmlString = images.map(image => createImageCard(image)).join('');
  gallery.innerHTML = htmlString;
}
  



// Пошук зображень за новим ключовим словом
function searchImages(query) {
  
  fetchImages(query).then(addImagesToGallery);
}
searchImages();

// Функція для показу індикатора завантаження
function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  gallery.appendChild(loader);
}
showLoader();
// Функція для приховування індикатора завантаження
function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
hideLoader();


  // Ініціалізація SimpleLightbox для нових зображень
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();

