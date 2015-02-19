import React from 'react';
import Fbase from '../stores/Fbase';

let userBar = function(name, avatar) {
  return (
    <div className="user">
      <img src={avatar} />
      <span className="name">{name}</span>
    </div>
  )
}

const Navigation = React.createClass({
  getInitialState (){
    return {
      user: {
        name: null,
        avatar: null
      }
    }
  },
  render (){
    let loginLink = <div className="login">
      <a onClick={this.loginWithFacebook}>Login with Facebook</a>
    </div>
    let user = this.state.user;
    return (
      <header role="banner" className="navigation">
        <h1>Crochet</h1>
        {user.name ? userBar(user.name, user.avatar) : loginLink}
      </header>
    )
  },
  loginWithFacebook() {
    let success = function(data) {
      let profile = data.facebook.cachedUserProfile;
      this.setState({
        user: {
          name: profile.name,
          avatar: profile.picture.data.url
        }
      });
    }.bind(this);
    let damn = function(error) { console.error(error) };
    Fbase.auth(success, damn);
  }
});

export default Navigation;
