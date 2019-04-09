import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <ul className="list-group">
    <h3 className="mt-5">{props.header}</h3>
        {props.results.map(result => (
            <li className="list-group-item mb-3" key={result.id}>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={result.volumeInfo.imageLinks.smallThumbnail} className="card-img mx-auto pt-4 pb-2 d-block" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <a href={result.volumeInfo.previewLink} className="card-link"><h5 className="card-title">{result.volumeInfo.title}</h5></a>
                                    <p className="card-text">by: {result.volumeInfo.authors}</p>
                                    <p className="card-text">{result.volumeInfo.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
  );
}

