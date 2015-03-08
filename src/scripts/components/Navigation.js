import React from 'react';
import ProfileStore from '../stores/Profile';
import NavLinks from './navigation/NavLinks';
import UserBar from './navigation/UserBar';
import Login from './navigation/Login';

let getState = function() {
  return {
    user: ProfileStore.getUser()
  }
}

const Navigation = React.createClass({
  getInitialState: getState,
  componentDidMount() {
    ProfileStore.addChangeListener(this._onChange);
  },
  _onChange() {
    this.setState(getState());
  },
  render (){
    let user = this.state.user;

    return (
      <header role="banner" className="navigation">
        <h1>Crochet</h1>
        <NavLinks />
        {user.name ? <UserBar name={user.name} avatar={user.avatar} /> : <Login />}
      </header>
    )
  }
});

export default Navigation;
