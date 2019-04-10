import React, { Component } from "react";
import {Jumbotron} from "../components/Jumbotron";
import booksBackground from "../images/booksBackground.png";

class LandingPage extends Component {
    state = {
        booksBackground
    }

    render() {
        return (
            <wrapper>
                <Jumbotron>
                    <div className="text-center">
                        <button className="btn btn-success m-3">Find Books</button>
                        <button className="btn btn-success m-3">View Saved Books</button>
                    </div>
                     
                </Jumbotron>
           </wrapper>
        )
    }

}

export default LandingPage;
