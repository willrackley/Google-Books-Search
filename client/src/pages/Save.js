import React, { Component } from "react";
import API from "../utils/API";
import {SaveCard} from "../components/SaveCard";
import { List } from "../components/List";
import "../App.css";

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

    deleteBooks = id => {
        API.deleteBook(id)
        .then(res => this.grabBooks())
        .catch(err => console.log(err));
    }

      render() {
        return (
            <div className="container mb-5">
                <h3 className="mt-5 mb-3 savedHeader">Saved Books</h3>

                <div>
                    <List>
                        {this.state.savedBooks.length ? (<SaveCard key={this.state.savedBooks._id} savedBooks={this.state.savedBooks} deleteBooks={this.deleteBooks}/>
                        ) : (<h3 className="mt-5 text-center text-secondary">No Books Saved</h3>)} 
                    </List>
                </div>
            </div>
        )
      }
}

export default Save;