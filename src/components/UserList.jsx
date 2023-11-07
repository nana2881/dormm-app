import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  render() {
    return (
      <div>
        <h1>User List Components</h1>

        {this.props.users.map((user) => {
          return <UserItem />;
        })}
      </div>
    );
  }
}

export default UserList;
