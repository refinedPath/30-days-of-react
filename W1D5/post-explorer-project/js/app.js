import { fetchPosts } from './api.js';
import { renderPosts } from './dom.js';
import { filterPosts, debounce } from './utils.js';

const fetchedPosts = await fetchPosts();

renderPosts(fetchedPosts);

const searchInputEl = document.getElementById('searchInput');

searchInputEl.addEventListener('input', debounce(() => {
  if (fetchedPosts) {
    const filteredPosts = filterPosts(fetchedPosts, searchInputEl.value);
    renderPosts(filteredPosts);
  }
}, 300));