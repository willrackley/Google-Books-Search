import React from "react";
import "./style.css";

export function SearchCard(props) {
  return (
    <ul className="list-group ">
    <h3 className="mt-5">{props.header}</h3>
        {props.results.map(result => (
            <li className="list-group-item mb-3 bg-primary rounded" key={result.id}>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        {!result.volumeInfo.imageLinks ? (<div><h3 className="p-4">No Image Available</h3><img src="#" className="card-img mx-auto pt-4 pb-2 d-block" alt="..."/></div>) : (<img src={result.volumeInfo.imageLinks.smallThumbnail} className="card-img mx-auto pt-4 pb-2 d-block" alt="..."/>)}
                            
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <a href={result.volumeInfo.previewLink} className="card-link"><h5 className="card-title">{result.volumeInfo.title}</h5></a>
                                    <p className="card-text">by: {result.volumeInfo.authors}</p>
                                    <p className="card-text">{result.volumeInfo.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters text-center">
                        <div className="col-12">
                        {!result.volumeInfo.imageLinks ? (<div className="card-footer text-muted">
                            <div onClick={() => props.addBook(result.volumeInfo.title,  result.volumeInfo.authors, result.volumeInfo.description,  "no image", result.volumeInfo.previewLink)}>
                                <i className="far fa-save"></i> SAVE BOOK
                            </div>
                        </div>) : (<div className="card-footer text-muted">
                            <div onClick={() => props.addBook(result.volumeInfo.title,  result.volumeInfo.authors, result.volumeInfo.description, result.volumeInfo.imageLinks.smallThumbnail || "no image",result.volumeInfo.previewLink)}>
                                <i className="far fa-save"></i> SAVE BOOK
                            </div>
                        </div>)}
                        
                        
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
  );
}

