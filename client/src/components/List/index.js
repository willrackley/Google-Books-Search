import React from "react";
//import "./style.css";

// This file exports the List Component

export function List({ children }) {
  return (
    <div className="list-overflow-container mt-2">
      <ul className="list-group">{children}</ul>
    </div>
  );
}