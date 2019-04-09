import React from "react";

// This file exports the Input and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success mt-2">
      {props.children}
    </button>
  );
}

export function RadioBtn(props) {
    return (
        <div className="form-check form-check-inline ml-1">
            <input className="form-check-input" type="radio" {...props}/>
            <label className="form-check-label">
            {props.children}
            </label>
        </div>
    );
}
