import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
} from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDished: null,
        };
    }

    onDishSelect = (dish) => {
        this.setState({
            selectedDished: dish,
        });
    };

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1" >
                    <Card onClick={
                        () => this.onDishSelect(dish)} >
                        <CardImg width="100%"
                            src={dish.image}
                            alt={dish.name}
                        /> <CardImgOverlay >
                            <CardTitle > {dish.name} </CardTitle>
                        </CardImgOverlay> </Card>
                </div>
            );
        });

        return (
            <div className="container" >
                <div className="row" > {menu} </div>
                <DishDetail selectedDish={this.state.selectedDished} />
            </div>
        );
    }
}

export default Menu;