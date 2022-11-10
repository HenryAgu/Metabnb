import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header>
        <nav className="navbar is-transparent is-light has-background-white">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/"></a>
              <button
                className={"navbar-burger" + (showMenu ? " is-active" : "")}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              className={"navbar-menu" + (showMenu ? " is-active" : "")}
              id="navMenu"
            >
              <div className="navbar-end">
                <a
                  className="navbar-item has-text-weight-medium"
                  href="/login"
                  style={{ color: "black" }}
                >
                  Home
                </a>
                <a
                  className="navbar-item has-text-weight-medium"
                  href="/login"
                  style={{ color: "black" }}
                >
                  Place to stay
                </a>
                <a
                  className="navbar-item has-text-weight-medium"
                  href="/login"
                  style={{ color: "black" }}
                >
                  NFTs
                </a>
                <a
                  className="navbar-item has-text-weight-medium"
                  href="/login"
                  style={{ color: "black" }}
                >
                  Community
                </a>
                <a className="navbar-item has-text-weight-medium" href="/login">
                  <button>Connect wallet</button>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
