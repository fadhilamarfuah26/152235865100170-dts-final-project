import axios from 'axios';


const rapid = axios.create({
  url: 'https://japanese-alphabet.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': '43ebcd8ad8msh34e6dbe8d53b96ap124371jsn2f2446129c01',
    'X-RapidAPI-Host': 'japanese-alphabet.p.rapidapi.com',
    "content-type": "application/json; charset=utf-8",
  }
});

export default rapid;