import React, { Component } from "react";
import API from "../utils/API";

class Save extends Component {
    state = {
        savedBooks: [], 
    }

    componentDidMount() {
        this.grabBooks();
      }
    
      grabBooks = () => {
        API.getBooks()
          .then(res => {
            this.setState({ savedBooks: res.data })
            console.log(this.state.savedBooks)
          })
          .catch(err => console.log(err));
      };

      render() {
        return (
            <div className="container">
                <h3 className="mt-5 mb-3">Saved Books</h3>
            
                <div>
                <ul className="list-group ">
   
        {this.state.savedBooks.map(books => (
            <li className="list-group-item mb-3 bg-primary rounded" key={books._id}>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={books.image} className="card-img mx-auto pt-4 pb-2 d-block" alt={books.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <a href={books.link} className="card-link"><h5 className="card-title">{books.title}</h5></a>
                                    <p className="card-text">by: {books.authors}</p>
                                    <p className="card-text">{books.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters text-center">
                        <div className="col-12">
                       <div className="card-footer text-muted">
                            <div>
                                <i className="far fa-save"></i> DELETE BOOK
                            </div>
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
                </div>
            </div>

        )
      }
}

export default Save;