#!/usr/bin/env node

//  GET REQUEST
async function get() {
    // Like the browser fetch API, the default method is GET
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    // returns something like:
    //   {
    //   userId: 1,
    //   id: 1,
    //   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //   body: 'quia et suscipit\n' +
    //     'suscipit recusandae consequuntur expedita et cum\n' +
    //     'reprehenderit molestiae ut ut quas totam\n' +
    //     'nostrum rerum est autem sunt rem eveniet architecto'
    // }
  }
  
  get().catch(console.error);


// POST REQUEST
// Data sent from the client to the server
const body = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

async function post() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'User-Agent': 'undici-stream-example',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);
  // returns something like:
  // { title: 'foo', body: 'bar', userId: 1, id: 101 }
}
post().catch(console.error);