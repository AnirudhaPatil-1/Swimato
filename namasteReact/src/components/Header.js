import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="h-12 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" h-10 flex justify-between bg-pink-50 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex py-1">
          <li className="mr-6">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="mr-6">About</li>
          </Link>
          <Link to="/contact">
            <li className="mr-6">Contact</li>
          </Link>
          <li className="mr-6">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="bg-blue-400  w-20 h-10 p-2 hover:bg-blue-700 text-white font-bold py-2 rounded " onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button  className="bg-blue-400 w-20 h-10 p-2 hover:bg-blue-700 text-white font-bold py-2 rounded" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
