import axios from 'axios';


const API_KEY = '43ebcd8ad8msh34e6dbe8d53b96ap124371jsn2f2446129c01';
const baseUrl = 'https://japanese-alphabet.p.rapidapi.com/api/hiragana';

const rapid = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});


export default rapid;