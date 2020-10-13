import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	BreadcrumbItem,
	Breadcrumb,
	Row,
	Label,
	Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.handleModal = this.handleModal.bind(this);
	}
	handleModal() {
		this.setState((state) => ({ isOpen: !state.isOpen }));
	}
	handleSubmit(value) {
		this.handleModal();
		alert(JSON.stringify(value));
	}
	render() {
		const modalForm = (
			<Modal isOpen={this.state.isOpen} toggle={this.handleModal}>
				<ModalHeader toggle={this.handleModal}>
					Submit Comment
				</ModalHeader>
				<ModalBody>
					<LocalForm onSubmit={(value) => this.handleSubmit(value)}>
						<Row className="form-group">
							<Label for="rating" xs={12}>
								Rating
							</Label>
							<Col xs={12}>
								<Control.select
									model=".rating"
									id="rating"
									name="rating"
									className="form-control"
									defaultValue="1"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Control.select>
							</Col>
						</Row>
						<Row className="form-group">
							<Label for="author" xs={12}>
								Your Name
							</Label>
							<Col xs={12}>
								<Control.text
									model=".author"
									id="author"
									name="author"
									className="form-control"
									validators={{
										required,
										minLength: minLength(3),
										maxLength: maxLength(15),
									}}
								/>
								<Errors
									className="text-danger"
									model=".author"
									show="touched"
									messages={{
										minLength:
											"Must be greater than 2 characters ",
										maxLength:
											"Must be 15 or less characters",
									}}
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<Label for="comment" xs={12}>
								Comment
							</Label>
							<Col xs={12}>
								<Control.textarea
									model=".comment"
									id="comment"
									name="comment"
									rows={6}
									className="form-control"
								></Control.textarea>
							</Col>
						</Row>
						<Button type="submit" color="primary">
							Submit
						</Button>
					</LocalForm>
				</ModalBody>
			</Modal>
		);

		return (
			<div>
				{this.state.isOpen ? modalForm : null}
				<Button onClick={this.handleModal} color="light" className="btn-outline-secondary">
					<i className="fa fa-pencil" aria-hidden="true"></i>{" "}
                    Submit Comment
				</Button>
			</div>
		);
	}
}

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
									-- {comment.author},{" "}
									{new Date(comment.date).toLocaleDateString(
										"en-US",
										{
											day: "numeric",
											month: "short",
											year: "numeric",
										}
									)}
								</p>
							</div>
						);
					})}
					<CommentForm />
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
}

const DishDetail = (props) => {
	if (props.selectedDish !== null) {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/menu">Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>
							{props.selectedDish.name}
						</BreadcrumbItem>
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
};

export default DishDetail;
