import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmitChange = (e) => {
    e.preventDefault();

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      id: uuid(),
    };

    this.props.addUser(newUser);

    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmitChange}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Fullname</Form.Label>
            <Form.Control
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              placeholder="Enter your Full name "
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User email</Form.Label>
            <Form.Control
              value={this.state.email}
              onChange={this.handleEmailChange}
              type="email"
              placeholder="Enter your Email"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default UserForm;
