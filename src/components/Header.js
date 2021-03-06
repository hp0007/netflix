import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import account from "../assets/images/acc1.jpg";

const Header = () => {
  window.addEventListener("scroll", function () {
    var header = document.getElementById("navbar2");
    if (window.scrollY > 0) {
      header.style.background = "#191919";
    } else {
      header.style.background = "none";
    }
  });
  const navData = [
    {
      id: 1,
      name: "Home",
      path: "/netflix",
    },
    {
      id: 2,
      name: "Tv Shows",
      path: "/tvShows",
    },
    {
      id: 3,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 4,
      name: "Series",
      path: "/series",
    },
  ];

  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg pt-4 pb-4" id="navbar2">
          <img className="ml-3" src={Logo} />
          <button
            class="navbar-toggler collapsed"
            data-target="#navbarNav"
            data-toggle="collapse"
          >
            <span class="line"></span>
            <span class="line mt-1"></span>
            <span class="line mt-1"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mr-auto">
              {navData.map((data) => {
                return (
                  <li className="nav-item mr-5" key={data.id}>
                    <NavLink
                      className="nav-link"
                      to={data.path}
                      exact
                      activeClassName="active"
                    >
                      {data.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="icons d-flex">
            <i>
              <BiSearch />
            </i>
            <i className="ml-3">
              <BsFillBellFill />
            </i>
            <div className="account">
              <img src={account} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
