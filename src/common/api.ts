import axios from 'axios';

export default axios.create({
  // baseURL: process.env.REACT_APP_API_ADDRESS,
  baseURL: 'http://localhost:3000/',
  responseType: 'json',
  // withCredentials: true,
  headers: {
    'X-Platform': 'WEB',
    'X-App-Version': process.env.REACT_APP_VERSION || "",
    'Content-Type': 'application/json',
  },
});
