import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.users.length} Users</h2>
        <ul>
          {this.props.users.map(user=> <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = function(state){
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
