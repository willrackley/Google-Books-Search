import React from "react";

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          <a className="navbar-brand" href="/">
            Google Book Search
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