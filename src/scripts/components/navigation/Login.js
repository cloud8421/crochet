import React from 'react';
import Fbase from '../../stores/Fbase';
import ProfileActions from '../../actions/ProfileActions';

const Login = React.createClass({
  render() {
    return (
      <div className="login">
        <button onClick={this.loginWithFacebook}>Login with Facebook</button>
      </div>
    )
  },
  loginWithFacebook() {
    let success = function(data) {
      let profile = data.facebook.cachedUserProfile;
      ProfileActions.setUser({
        uid: data.facebook.id,
        name: profile.name,
        avatar: profile.picture.data.url
      });
    };
    let damn = function(error) { console.error(error) };
    Fbase.auth(success, damn);
  }
});

export default Login;
