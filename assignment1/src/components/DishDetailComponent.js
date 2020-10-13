import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="70%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments) {
        if (comments !== null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>
                        {comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>
                                        -- {comment.author}, {(new Date(comment.date)).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    render() {
        if (this.props.selectedDish) {
            return (
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default DishDetail;
