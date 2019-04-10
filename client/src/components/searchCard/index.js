import React from "react";
import "./style.css";

export function SearchCard(props) {
  return (
    <div>
    <h3 className="mt-2 mb-4 searchResultsHeader">{props.header}</h3>
        {props.results.map(result => (
            <li className="list-group-item mb-3 pt-4 rounded" key={result.id}>
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
                            <button className="btn btn-secondary" onClick={() => props.addBook(result.volumeInfo.title,  result.volumeInfo.authors, result.volumeInfo.description,  "no image", result.volumeInfo.previewLink)}>
                                <i className="far fa-save"></i> {props.btnText}
                            </button>
                        </div>) : (<div className="card-footer text-muted">
                            <button className="btn btn-success" onClick={() => props.addBook(result.volumeInfo.title,  result.volumeInfo.authors, result.volumeInfo.description, result.volumeInfo.imageLinks.smallThumbnail,result.volumeInfo.previewLink)}>
                                <i className="far fa-save"></i> {props.btnText}
                            </button>
                        </div>)}
                        
                        
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </div>
  );
}

