/////////////////////////////////////////////////
//  Fetch API (Promise chaining & async/await) //
/////////////////////////////////////////////////

// fetch('https://jsonplaceholder.typicode.com/posts/9999999')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP status code ${response.status}`);
//     } else {
//       return response.json()
//     }
//   })
//   .then(console.log)
//   .catch(console.log);

//////////

async function getSomeData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/9999999');

    if (!response.ok) {
      throw new Error(`HTTP status code ${response.status}`);
    } else {
      const payload = await response.json();
      console.log(payload);
    }
  } catch(err) {
    console.log(err)
  }
}

// getSomeData();

/////////////////////////
// Send data with POST //
/////////////////////////

const postData = {
  title: "Lorem title",
  body: "Ipsum body",
  userId: 999
}

const postDataStr = JSON.stringify(postData);

const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: postDataStr
    };

// fetch(
//     'https://jsonplaceholder.typicode.com/posts',postObj)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP status code ${response.status}`);
//       } else {
//         return response.json()
//       }
//     })
//     .then(console.log)
//     .catch(console.log);

//////////

async function postSomeData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', postObj);

    if (!response.ok) {
      throw Error(`HTTP status code ${response.status}`);
    } else {
      const payload = await response.json();
      console.log(payload);
    }
  } catch(err) {
    console.log(err);
  }
}

// postSomeData();

/////////////////////////////////////////////////////
// GET /users, GET /posts?userId=1, POST to /posts //
/////////////////////////////////////////////////////

async function requestUrl(reqUrl, postPayload) {
  try {
    const response = await fetch(reqUrl, postPayload);

    if (!response.ok) {
      throw Error(`HTTP status code ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch(err) {
    console.log(err);
    return null;
  }
}

async function makeRequests() {
  const getUsers = await requestUrl('https://jsonplaceholder.typicode.com/users');

  const getUsersPosts = await requestUrl('https://jsonplaceholder.typicode.com/posts?userId=1');

  const postSomeNewData = await requestUrl('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        title: 'New title',
        body: 'New body here',
        userId: 999
      })
    });

  console.log(getUsers);
  console.log(getUsersPosts);
  console.log(postSomeNewData);
}

makeRequests();
