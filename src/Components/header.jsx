import Logo from '../Icons/CocktailLogo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="site logo"/>
      <h1>The Imbibing Imp</h1>
      <img src={Logo} alt="site logo" className="blank"/>
    </div>
  );
};

export default Header;