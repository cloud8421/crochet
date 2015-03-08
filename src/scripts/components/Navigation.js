import React from 'react';
import { Link } from 'react-router';
import Fbase from '../stores/Fbase';
import ProfileStore from '../stores/Profile';
import ProfileActions from '../actions/ProfileActions';

let userBar = function(name, avatar) {
  return (
    <div className="user">
      <img src={avatar} />
      <span className="name">{name}</span>
    </div>
  )
}

let loginLink = function(clickCb) {
  return (
    <div className="login">
      <button onClick={clickCb}>Login with Facebook</button>
    </div>
  )
}

let navLinks = function() {
  return (
    <nav className="main-nav">
      <ul>
        <li><a href="#">All projects</a></li>
        <li><Link to="new-project">Add new</Link></li>
      </ul>
    </nav>
  )
}

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
        {navLinks()}
        {user.name ? userBar(user.name, user.avatar) : loginLink(this.loginWithFacebook)}
      </header>
    )
  },
  loginWithFacebook() {
    let success = function(data) {
      let profile = data.facebook.cachedUserProfile;
      ProfileActions.setUser({
        uid: data.uid,
        name: profile.name,
        avatar: profile.picture.data.url
      });
    };
    let damn = function(error) { console.error(error) };
    Fbase.auth(success, damn);
  }
});

export default Navigation;
