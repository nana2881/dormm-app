import React, { Component } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: uuid(), name: "John Doe", email: "john@email.com" },
        { id: uuid(), name: "Nana Joe", email: "nana@email.com" },
        { id: uuid(), name: "Kofi Doe", email: "Kofi@email.com" },
        { id: uuid(), name: "Yaw Doe",  email: "yaw@email.com" },
      ],
    };
  }

  addNewUser = (newUser) => {
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <UserForm addUser={this.addNewUser} />
          </Col>

          <Col>
            <UserList users={this.state.users} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
