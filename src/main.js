// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import { fetchPhotos } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';



const searchForm = document.querySelector('.searchForm');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(searchForm.elements.search.value);
  const search = searchForm.elements.search.value;
  gallery.innerHTML = '';
  loader.style.display = 'block';
  if (search === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  };
  

  fetchPhotos(search)
    .then(res => {
      console.log(res);
      gallery.innerHTML = createMarkup(res);
      lightbox.refresh();
    })
    .then(data => {
      loader.style.display = 'none';
    })
    .catch(error => {
      console.error('Error fetching data!', error);
    });
   
  searchForm.reset();
});

