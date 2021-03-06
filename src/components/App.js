import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import DrupalFormContainer from './drupal/DrupalFormContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={DrupalFormContainer} />
                <Route path='/login' component={Login} />
              </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App