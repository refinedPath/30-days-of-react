export function filterPosts(posts, searchStr) {
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchStr.toLowerCase()) || post.body.toLowerCase().includes(searchStr.toLowerCase())
  );

  return filteredPosts;
}

export function debounce(cb, delay) {
  let timerId;

  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(cb, delay)
  };
}