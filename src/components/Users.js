import React, { Component } from "react";
import { connect } from "react-redux";
import { stat } from "fs";

class Users extends Component {
  render() {
    // debugger;
    return (
      <div>
        Total users: {this.props.userCount}
        <ul>
          {this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// export default Users;
export default connect(mapStateToProps)(Users)
