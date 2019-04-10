import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { SearchCard } from "../components/SearchCard";
import { List } from "../components/List";
import {Jumbotron} from "../components/Jumbotron";
import API from "../utils/API";

class Search extends Component {

    state = {
        searchInput: "",
        searchResults: [],
        header: "",
        saveBtnText: "SAVE BOOK"
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBook = (book) => {
        API.searchBook(book)
        .then(res => { 
            this.setState({searchResults:  res.data.items})
        })
      .catch(err => console.log(err)); 
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.searchInput) {
            this.searchBook(this.state.searchInput);
        } else {
            console.log('error')
        }
        this.setState({
            header: "Results",
        })  
    };

    addBook = (id, title, author, description, image, link) => {
        const newBook = {
            apiId: id,
            title: title,
            authors: author,
            description: description, 
            image: image,
            link: link
        }

        API.saveBook(newBook)
        .then(res => {  
        })
      . catch(err => console.log(err)); 
    }
      
    render() {
        return (
            <div>
            <Jumbotron>
                <div className="container">
                    <h3 className="mt-5 mb-3 searchHeader text-white"> <i className="fas fa-search"></i> Find Books</h3>
                    <form>
                    <Input
                    value={this.state.searchInput}
                    onChange={this.handleInputChange}
                    name="searchInput"
                    placeholder=""
                    />
                    
                    <div>
                        <FormBtn
                        disabled={!(this.state.searchInput)}
                        onClick={this.handleFormSubmit}
                        >
                        Submit
                        </FormBtn>
                    </div>
                    </form>
                </div>
            </Jumbotron>

                <div className="container">
                    <List>
                        {this.state.searchResults ? ( < SearchCard key={this.state.searchResults.id} results={this.state.searchResults} header={this.state.header} addBook={this.addBook} btnText={this.state.saveBtnText} />) : ( <h3 className="mt-5">Sorry, your search did not match any documents.</h3>)}
                    </List>  
                </div>
            </div>
        )
    }
}

export default Search;