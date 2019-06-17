import { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

function Home() {
  fetch('http://backend:3004', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables: {},
      operationName: '',
      query: `
      query Joke {
        joke {
          type
          value {
            id
            joke
          }
        }
      }
      `,
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log('data', data);
    });

  return <div>Welcome to Next.js!</div>;
}

export default Home;
