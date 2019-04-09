import React, { Component } from "react";
import { Input, FormBtn} from "../components/form";
import { Card} from "../components/card";
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
      

    render() {
        return (
            <div className="container">
                <h3 className="my-3">Find a book</h3>
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
                    < Card key={this.state.searchResults.id} results={this.state.searchResults} header={this.state.header}/>
                </div>
            </div>
        )
    }
}

export default Search;