import logo from "/images/logo.jpg"


const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;