import React from "react";
import "./style.css"

export function Jumbotron({ children }) {
  return (
    <div className="jumbotron mt-4">
      {children}
    </div>
  );
};
