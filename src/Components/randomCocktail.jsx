import axios from "axios";
import { useState, useEffect } from "react";

const Random = () => {
  const [drinksData, setDrinks] = useState([]);

  const options = {
    method: "GET",
    url: "https://the-cocktail-db.p.rapidapi.com/random.php",
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
      <h1>Random Cocktail</h1>
      <div>
        <ul className="single-drink-container">
          {drinksData.map((drink) => {
            return (
              <div>
                <li className="singleDrink">
                  <div className="cocktailImages_wrap">
                  <img
                    className="singleCocktailImage"
                    src={drink.strDrinkThumb}
                    alt="Cocktail"
                  />
                  </div>
                  <div>
                  <h3>{drink.strDrink}</h3>
                  <p>{drink.strIngredient1}, {drink.strIngredient2} and {drink.strIngredient3}</p>
                  <p>{drink.strInstructions}</p>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );

};

export default Random;
