export function renderPosts(posts) {
  const searchResultsEl = document.getElementById('searchResults');

  let postsHtml;

  if (posts === null) {
    postsHtml = 'Error loading data.';
    searchResultsEl.className = 'error-loading center-it';
  } else if(posts.length === 0) {
    postsHtml = 'No posts found.';
    searchResultsEl.className = 'center-it';
  } else {
    postsHtml = posts.map(({ title, body }) => `<li>${title}<br>${body}</li>`).join('');
    searchResultsEl.className = '';
  }
  
  searchResultsEl.innerHTML = postsHtml;
}