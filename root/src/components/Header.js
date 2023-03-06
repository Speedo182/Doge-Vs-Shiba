import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="Doge vs Shiba" className="logo" />
          </div>
          <div className="col-md-8">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Play
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
