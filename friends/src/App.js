import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import FriendForm from './components/FriendForm'


function App() {
    return (
      <Router>
      <div className="App">
        <div>
          <h1>Redux Friends</h1>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path="/protected" component={Friends} />
          <PrivateRoute exact path="/friend-form" component={FriendForm} />
        </div>
      </div>
      </Router>
    );
}

export default App;
