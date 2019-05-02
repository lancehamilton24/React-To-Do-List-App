import React from 'react';
import PropTypes from 'prop-types';
import './Auth.scss';
import authRequests from '../../../helpers/data/authRequests';
import { Button } from 'reactstrap';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className='auth'>
        <Button onClick={this.authenticateUser}></Button>/> 
      </div>
    );
  }
}

export default Auth;
