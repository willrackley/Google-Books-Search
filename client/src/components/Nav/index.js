import React from "react";
import "./style.css";
function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg">
      <div className="container">
          <a className="navbar-brand" href="/">
          <i className="fab fa-google"></i> Book Search
          </a>
          <div className="navbar-nav">
          <a className="nav-link" href="/search">
            Search Books
          </a>
          <a className="nav-link" href="/saved">
            Saved Books
          </a>
          </div>
        </div>
    </nav>
    
  );
}

export default Nav;