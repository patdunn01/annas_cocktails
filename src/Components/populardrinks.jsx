import axios from "axios";
import { useState, useEffect } from "react";

const PopularDrinks = () => {
  const [drinksData, setDrinks] = useState([]);

  const options = {
    method: "GET",
    url: "https://the-cocktail-db.p.rapidapi.com/popular.php",
    params: { c: "list" },
    headers: {
      "X-RapidAPI-Key": "93fc287a6fmsh8a27ec8e4a750e3p1a7c1ejsn6c5636fd3568",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    }
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setDrinks(response.data.drinks);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <header>
      <h1>Popular Cocktails</h1>
      <div>
        <ul className="drinks-list-container">
          {drinksData.map((drink) => {
            return (
              <div>
                <li className="drinksListItem">
                  <div className="cocktailImages_wrap">
                  <img
                    className="cocktailImages"
                    src={drink.strDrinkThumb}
                    alt="Cocktail"
                  />
                  <p>{drink.strIngredient1}, {drink.strIngredient2} and {drink.strIngredient3}</p>
                  </div>
                  <h3>{drink.strDrink}</h3>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );

};

export default PopularDrinks;
