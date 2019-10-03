import axios from 'axios';

let apiHost = 'https://jsonplaceholder.typicode.com/';

const rest = axios.create({
  baseURL: apiHost,
});

rest.interceptors.response.use(null, function(error) {
  console.log(error);
  return Promise.reject(error);
});

export function fetch(endpoint) {
  return rest.get(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}

export default rest;
