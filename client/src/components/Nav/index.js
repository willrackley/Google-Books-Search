import React from "react";

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
        <a className="navbar-brand" href="/">
          Google Book Search
        </a>
        <a className="navbar-brand" href="/">
          Search Books
        </a>
        <a className="navbar-brand" href="/saved">
          Saved Books
        </a>
      </div>
    </nav>
    
  );
}

export default Nav;