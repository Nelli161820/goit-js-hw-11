export function fetchUser(search) {
  return fetch(
    `https://pixabay.com/api/?key=42494540-1ca0643de0a334de28e64a581&q=${encodeURIComponent(
      search
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
