import React, { Component } from "react";
import { DISHES } from "./shared/dishes";
import "./App.css";
import Menu from "./components/MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: DISHES,
        };
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dish} />
            </div>
        );
    }
}

export default App;
