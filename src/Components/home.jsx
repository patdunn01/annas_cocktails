import Karolina1 from "../Images/pexels-karolina-grabowska-4021872.jpg";
import Anna from "../Images/Anna1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {

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
        setDrinks(response.data.drinks);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="home-page-main-img-container">
        <img
          src={Karolina1}
          alt="main image"
          loading="lazy"
          className="home-page-main-img"
        />
      </div>
      <div className="bio">
      <img
          src={Anna}
          alt="main image"
          loading="lazy"
          className="Anna-icon"
        />
        <p>
          <em>I got into cocktail making because I wanted to impress my friends with my mixology skills. 
          It started as a fun hobby, but soon became a passion of mine. As someone who enjoys hosting parties and gatherings,
           I realised that knowing how to make great cocktails is an important skill to have. It adds an extra level of 
           sophistication and enjoyment to any event. For me, cocktail making is not just about creating a delicious drink. 
           It's also a form of creative expression, where I can experiment 
          with flavours and ingredients to create unique and exciting drinks that reflect my personality and style.</em> 
          <br/><br/><strong>Anna, founder and cocktail maniac</strong> 
          </p>
      </div>
      <div>
        <ul className="home-page-drinks-list-container">
          {drinksData.map((drink) => {
            if(drink.strDrink==="Negroni" || drink.strDrink==="Old Fashioned" || drink.strDrink==="Mojito"){
            return (
              <div>
                <li className="home-page-drinksListItem">
                  <div className="cocktailImages_wrap">
                  <Link  to={`/singleDrink/${drink.idDrink}`} className="navbar-item">
                  <img
                    className="cocktailImages"
                    src={drink.strDrinkThumb}
                    alt="Cocktail"
                  />
                  </Link>
                  </div>
                  <h3>{drink.strDrink}</h3>
                </li>
              </div>
            );
          }})}
        </ul>
      </div>
      </div>
    
  );
};

export default Home;
