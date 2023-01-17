import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
  headers: {
    'X-RapidAPI-Key': '93fc287a6fmsh8a27ec8e4a750e3p1a7c1ejsn6c5636fd3568',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data, "hello");
}).catch(function (error) {
	console.error(error);
});