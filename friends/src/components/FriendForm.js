import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class FriendForm extends React.Component {
  state = {
    friend: {
      name: '',
      email: '',
      age: ''
    }
  };

  handleChanges = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend).then(() => {
      this.props.history.push('/protected');
    });
    this.setState({
      friends: {
        name: '',
        email: '',
        age: ''
      }
    });
  };

  render() {
    return (
      <div className="friend-form">
        <h2>Add New Friend</h2>
        <form className="form" onSubmit={this.addFriend}>
          <label htmlFor="name">Friend's Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.friend.name}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Eail"
            onChange={this.handleChanges}
            value={this.state.friend.email}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChanges}
            value={this.state.friend.age}
          />
          <div className="flex-spacer" />

          <button>
            {this.props.addingFriend ? (
              <Loader type="Hearts" color="#somecolor" height={80} width={80} />
            ) : (
              'Add Friend'
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ addingFriend }) => ({
  addingFriend
});

export default connect(
  mapStateToProps,
  { addFriend }
)(FriendForm);
