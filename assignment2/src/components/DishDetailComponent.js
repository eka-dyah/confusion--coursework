import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
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
function RenderComments({ comments }) {
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

const DishDetail = (props) => {
    if (props.selectedDish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.selectedDish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default DishDetail;
