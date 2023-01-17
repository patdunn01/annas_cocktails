import "./App.css";
import Header from "./Components/header";
import Nav from "./Components/nav";
import Home from './Components/home'
import PopularDrinks from './Components/populardrinks'
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
