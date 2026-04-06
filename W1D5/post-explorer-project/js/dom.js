export function renderPosts(posts) {
  const searchResultsEl = document.getElementById('searchResults');

  let postsHtml;

  if (posts === null) {
    postsHtml = 'Error loading data.';
  } else if(posts.length === 0) {
    postsHtml = 'No posts found.';
  } else {
    postsHtml = posts.map(({ title, body }) => `<li>${title}<br>${body}</li>`).join('');
  }
  
  searchResultsEl.innerHTML = postsHtml;
}