import React from 'react';
import Loader from 'react-loader-spinner';

class EditFriends extends React.Component {
  state = {
    friend: this.props.friend
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

  editFriend = e => {
    this.props.editFriend(e, this.state.friend);
  };

  render() {
    return (
      <div className="edit-form">
        <form className="edit-form" onSubmit={this.editFriend}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Josh Knell"
            onChange={this.handleChanges}
            value={this.state.friend.name}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="josh@lambdaschool.com"
            onChange={this.handleChanges}
            value={this.state.friend.email}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="85"
            onChange={this.handleChanges}
            value={this.state.friend.age}
          />

          <button>
            {this.props.editingFriend ? (
              <Loader type="Hearts" color="#somecolor" height={80} width={80} />
            ) : (
              'Edit Friend'
            )}
          </button>
        </form>
      </div>
    );
  }
}

export default EditFriends