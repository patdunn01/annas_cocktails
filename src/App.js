import "./App.css";
import Header from "./Components/header";
import Nav from "./Components/nav";
import Home from './Components/home'
import PopularDrinks from './Components/populardrinks'
import RandomCocktail from './Components/randomCocktail'
import Single from './Components/singleDrink'
import Footer from './Components/footer'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/populardrinks" element={<PopularDrinks />} />
        <Route path="/randomCocktail" element={<RandomCocktail />} />
        <Route path="/singleDrink/:idDrink" element={<Single />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
