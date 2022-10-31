import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import '../styles/main.css'
import logo from "../assets/schoolhacks-logo.png";

function Header(props) {
  const location = useLocation()
  //console.log(location)

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="SchoolHacks logo"
          title="SchoolHacks | Home"
        />
      </Link>

      <nav className="navbar">
        <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
        <NavLink to="/about"><i className="fa fa-fw fa-search"></i> About</NavLink>
        <NavLink to="/workshops"><i className="fa fa-fw fa-envelope"></i> Workshops</NavLink>
      </nav>
    </header>
  );
}

export default Header;

