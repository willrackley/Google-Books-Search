import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { SearchCard } from "../components/SearchCard";
import { List } from "../components/List";
import API from "../utils/API";

class Search extends Component {

    state = {
        searchInput: "",
        searchResults: [],
        header: ""
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
            //console.log(this.state.searchResults)
        })
      .catch(err => console.log(err)); 
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.searchInput) {
         console.log(`Input: ${this.state.searchInput}`);
         
        this.searchBook(this.state.searchInput);
        } else {
            console.log('error')
        }
        this.setState({
            header: "Results",
        })  
    };

    addBook = (title, author, description, image, link) => {
        const newBook = {
            title: title,
            authors: author,
            description: description, 
            image: image,
            link: link
        }

        API.saveBook(newBook)
        .then(res => {  
            console.log(res.data)
        })
      .catch(err => console.log(err)); 
        console.log(newBook)
    }
      

    render() {
        return (
            <div className="container">
                <h3 className="mt-5 mb-3">Find a book</h3>
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

                <div>
                    <List>
                        {this.state.searchResults ? ( < SearchCard key={this.state.searchResults.id} results={this.state.searchResults} header={this.state.header} addBook={this.addBook} />) : ( <h3 className="mt-5">Sorry, your search did not match any documents.</h3>)}
                    </List>
                    
                   
                </div>
            </div>
        )
    }
}

export default Search;