const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://japanese-alphabet.p.rapidapi.com/api/all',
  headers: {
    'X-RapidAPI-Key': '43ebcd8ad8msh34e6dbe8d53b96ap124371jsn2f2446129c01',
    'X-RapidAPI-Host': 'japanese-alphabet.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});