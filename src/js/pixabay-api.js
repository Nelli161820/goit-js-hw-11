export function fetchImages(query) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://pixabay.com/api/?key=42494540-1ca0643de0a334de28e64a581&q=${encodeURIComponent(
        query
      )}&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
