import React from 'react';
import ProfileActions from '../../actions/ProfileActions';

const Logout = React.createClass({
  render() {
    return (
      <div className="logout">
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  },
  logout() {
    ProfileActions.unsetUser();
  }
});

export default Logout;
