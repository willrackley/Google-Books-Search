import React, { Component } from "react";
import {Jumbotron} from "../components/Jumbotron";
import booksBackground from "../images/booksBackground.png";
import { Link } from "react-router-dom";
import "../App.css";

class LandingPage extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                        <h1 className="text-white jbHeading">SEARCH. SAVE. READ.</h1>
                        <Link to={"/search"}>
                            <button className="btn m-3 jbBtn"><i className="fas fa-search"></i> Find Books</button>
                        </Link>
                        <Link to={"/saved"}>
                            <button className="btn m-3 jbBtn"><i className="fas fa-book-reader"></i> View Saved Books</button>
                        </Link>
                    </div>
                     
                </Jumbotron>
           </div>
        )
    }

}

export default LandingPage;
