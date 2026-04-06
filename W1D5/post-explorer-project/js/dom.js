export function renderPosts(posts) {
  const searchResultsEl = document.getElementById('searchResults');

  const postsHtml = posts.map(({ title, body }) => `<li>${title}<br>${body}</li>`).join('');
  
  searchResultsEl.innerHTML = postsHtml;
}