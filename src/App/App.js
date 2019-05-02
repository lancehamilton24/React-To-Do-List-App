import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/connections';
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true});
  }

  render() {
    const {
      authed,
    } = this.state
  
  const logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false });
  };


  if (!authed) {
    return (
      <div className="App">
      <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated}/>
      </div>
    );
  }
  return (
    <div className="App">
        <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent}>
          
        </MyNavbar>
    </div>
  )
  }
}

export default App;
