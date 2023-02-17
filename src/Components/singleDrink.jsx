import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const [drinksData, setDrinks] = useState([]);
  const params = useParams();

  const options = {
    method: "GET",
    url: "https://the-cocktail-db.p.rapidapi.com/lookup.php",
    params: {i: params.idDrink},
    headers: {
      "X-RapidAPI-Key": "93fc287a6fmsh8a27ec8e4a750e3p1a7c1ejsn6c5636fd3568",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    }
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(params.idDrink, "params");
        console.log(response, "response");
        setDrinks(response.data.drinks);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <header>
      <div>
        <ul className="single-drink-container">
          {drinksData.map((drink) => {
            return (
              <div>
              <div>
                <h1>{drink.strDrink}</h1>
                </div>
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
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );

};

export default Single;
