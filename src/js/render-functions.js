export function displayImages(images) {
  let gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Очистити HTML вміст галереї
  images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.largeImageURL;
    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.classList.add('image');
    link.appendChild(img);
    gallery.appendChild(link);
  });
  
}
