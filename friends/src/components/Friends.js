import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getFriends } from '../actions'

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (
        <div>
        {this.props.friends.map(friend => {
            return (
                <div>
                <h2>{friend.name}</h2>
                <p>{friend.email}</p>
                </div>
            )
        })}
        </div>
        )
    }
}

const mapStateToProps = ({
    friends
  }) => ({
    friends
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getFriends }
    )(Friends)
  )