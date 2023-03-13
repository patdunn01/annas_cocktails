import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Blog = () => {
  const [drinksData, setDrinks] = useState([]);

  axios.get('https://api.render.com/deploy/srv-cfprsjh4rebfdavgi3fg?key=Vq6lRYERKdQ/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  return (
    <header>
      <h1>Blog</h1>
      <div>
        <ul className="drinks-list-container">
          {drinksData.map((drink) => {
            return (
              <div>
                <li className="drinksListItem">
                  <div className="cocktailImages_wrap">
                  <Link  to={`/singleDrink/${drink.idDrink}`} className="navbar-item">
                  <img
                    className="cocktailImages"
                    src={drink.strDrinkThumb}
                    alt="Cocktail"
                  />
                  </Link>
                  <p>{drink.strIngredient1}, {drink.strIngredient2} and {drink.strIngredient3}</p>
                  </div>
                </li>
                  <h3>{drink.strDrink}</h3>
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );

};

export default Blog;
