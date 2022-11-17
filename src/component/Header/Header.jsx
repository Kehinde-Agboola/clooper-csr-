import React from "react";
import logo from ".././img/New_Logo.svg";
import down from ".././img/down.svg";
import "./header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <navbar className="">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <nav>
            <div className="input__search">
              <input type="search" placeholder="search a property..." />
            </div>
            <ul>
              <li>
                <a href="#">Become a supplier</a>
              </li>

              <li>
                <a href="#">Join Us</a>
              </li>
              <button className="btn">Login</button>
            </ul>
          </nav>
        </navbar>
      </header>
    </>
  );
};

export default Header;
