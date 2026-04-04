async function makeRequest(reqUri) {
  try {
    const response = await fetch(reqUri);

    if (!response.ok) throw Error(`HTTP status code ${response.status}`);

    const payload = await response.json();
    return payload;
  } catch(err) {
    throw Error(err);
  }
}

async function getUsers() {
  const usersDiv = document.getElementById('users');

  usersDiv.innerHTML = "Loading...";

  try {
    const users = await makeRequest('https://jsonplaceholder.typicode.com/users');

    const usernamesAndEmails = users.map(({ name, email }) => `<li>${name} (${email})</li>`).join('');

    usersDiv.innerHTML = `<ul>${usernamesAndEmails}</ul>`;
  } catch(err) {
    usersDiv.innerHTML = err;
  }
}

getUsers();