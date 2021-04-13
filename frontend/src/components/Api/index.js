import axios from 'axios';

const fastApi = axios.create({
  baseURL: 'https://eng-tool-mobile.herokuapp.com/',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': 'https://eng-tool-mobile.herokuapp.com/',
    'Access-Control-Allow-Methods': 'GET,POST',
    "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  },
});

export default fastApi;
