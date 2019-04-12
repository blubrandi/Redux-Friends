import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Redux Friends</h1>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path="/protected" component={Friends} />
        </div>
      </div>
    );
  }
}

export default App;
