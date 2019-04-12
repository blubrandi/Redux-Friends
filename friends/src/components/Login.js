import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { login } from '../actions/login'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault()
        this.props
        .login(this.state.credentials)
        .then(() => {this.props.history.push('/protected')
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.login}>
                <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                />
                <input 
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                />
                <button>
                    {this.props.loggingIn ? (
                        <Loader type="ThreeDots" color="#1f2a38" />
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
        </div>
        )}
}

const mapStateToProps = ({ loggingIn, error }) => ({
    error,
    loggingIn
})

export default connect(
    mapStateToProps,
    { login }
)(Login)