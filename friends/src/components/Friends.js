import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getFriends, deleteFriends, editFriend } from '../actions'

import EditFriends from './EditFriends'

class FriendsList extends React.Component {
  state = {
    deletingFriend: null,
    editingFriendId: null
  };

  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = id => {
    this.setState({ deletingFriendId: id });
    this.props.deleteFriends(id);
  };

  editFriend = (e, friend) => {
    e.preventDefault();
    this.props.editFriend(friend).then(() => {
      this.setState({ editingFriendId: null });
    });
  };

  render() {
    if (this.props.fetchingFriends)
      return (
        <div className="friends" style={{ paddingTop: '36px' }}>
          <Loader type="Puff" color="#ffffff" height="100" width="100" />
        </div>
      );
    return (
      <div className="friends">
        <h2>Friends</h2>
        {this.props.friends.map(friend => {
          if (this.state.editingFriendId === friend.id) {
            return (
              <div className="friend-card">
                <EditFriends
                  friend={friend}
                  editFriend={this.editFriend}
                  editingFriend={this.props.editingFriend}
                />
              </div>
            );
          }
          return (
            <div>
              <i
                class="fas fa-pencil-alt"
                onClick={() => this.setState({ editingFriendId: friend.id })}
              />
              <i
                class="fas fa-times"
                onClick={() => this.deleteFriend(friend.id)}
              />
              <h4>{friend.name}</h4>
              <p>{friend.email}</p>
              {this.props.deletingFriend &&
                this.state.deletingFriendId === friend.id && (
                  <p>Deleting Friend</p>
                )}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({
  deletingFriend,
  friends,
  fetchingFriends,
  editingFriend
}) => ({
  deletingFriend,
  editingFriend,
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends, deleteFriends, editFriend }
  )(FriendsList)
)