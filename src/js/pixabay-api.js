
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchPhotos(search) {
  return fetch(
    `https://pixabay.com/api/?key=42494540-1ca0643de0a334de28e64a581&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
         if (!response.ok) {
         throw new Error(response.status);
    }
    return response.json();
    })
    
    .then(data => { 
          if (data.hits.length === 0) {
          iziToast.error({
            timeout: 1000,
            position: 'topRight',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
     }
    return data;
    })

    .catch(error => {
          console.error('Error', error);
    });
};












