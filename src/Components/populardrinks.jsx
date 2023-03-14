import axios from "axios";
import { Link } from "react-router-dom";
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
        <div className="drinks-list-container">
          {drinksData.map((drink) => {
            return (
                <li className="drinksListItem"> {/* blue */}
                  
                  <Link  to={`/singleDrink/${drink.idDrink}`}> {/* cyan */}
                  <img
                    className="cocktailImages" /* #CF4344 */
                    src={drink.strDrinkThumb}
                    alt="Cocktail"
                    />
                    <p>{drink.strIngredient1}, {drink.strIngredient2} and {drink.strIngredient3}</p>
                  </Link>
                  
                  <h3>{drink.strDrink}</h3> {/* green */}
                </li>
              
            );
          })}
        </div>
      
    </header>
  );

};

export default PopularDrinks;


//teachable 
//c# fundamentals
//c# pathway 