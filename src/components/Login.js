import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/login'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/')
    this.props.dispatch(handleLogin(this.state))
  }
  render() {
    const { username, password } = this.state
    const { isAuthenticated } = this.props
    return (
      <div>
        {isAuthenticated ? (
            <p>Already logged in.</p>
          ) : (
            <form className='login-form' onSubmit={this.handleSubmit}>
              <input
                value={username}
                onChange={this.handleInputChange}
                type='text'
                name='username'
                className="input"
                placeholder='Username'/>
              <input
                value={password}
                onChange={this.handleInputChange}
                type='password'
                name='password'
                className="input"
                placeholder='Password'/>
              <button className='btn' type='submit'>
                Submit
              </button>
            </form>
          )}
      </div>
    )
  }
}
function mapStateToProps({ auth }) {
  const { isAuthenticated } = auth
  return {
    isAuthenticated
  }
}
export default connect(mapStateToProps)(Login)