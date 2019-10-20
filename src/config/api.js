import axios from 'axios';

axios.interceptors.request.use(function(config) {
  const token = 'jsdfjksda&asjfkljsd&ksadfkslkdjf9';

  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});

export default axios.create({
  baseURL: `https://swapi.co/api/`,
  responseType: 'json',
  headers: {'Authorization': 'Bearer jsdfjksda&asjfkljsd&ksadfkslkdjf9'},
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    console.log("received data", data);
    return data;
  }]
});
