// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import { fetchUser } from './js/pixabay-api.js';
import { showGallery } from './js/render-functions.js';



const searchForm = document.querySelector('.searchForm');
const gallery = document.querySelector('.gallery');
const search = document.querySelector("search")
let searchInput = document.querySelector('.searchInput');
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(searchForm.elements.search.value);
  const search = searchForm.elements.search.value;
  gallery.innerHTML = '';
if (search === '') {
    
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  fetchUser(search).then(showGallery);
  searchForm.reset();
  
    
})
  