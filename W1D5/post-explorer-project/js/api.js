export async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) throw Error(`HTTP status: ${response.status}`);
    
    const payload = await response.json();

    return payload;
  } catch(err) {
    console.error(err);
    return null;
  }
}