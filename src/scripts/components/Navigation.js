import React from 'react';

const Navigation = React.createClass({
  render (){
    return (
      <header role="banner" className="navigation">
        <h1>Crochet</h1>
        <div className="login">
          <a onClick={this.loginWithFacebook}>Login with Facebook</a>
        </div>
      </header>
    )
  },
  loginWithFacebook() {
    console.log('should login with Facebook');
  }
});

export default Navigation;
