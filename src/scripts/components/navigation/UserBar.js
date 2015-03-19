import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import Logout from './Logout';

const UserBar = React.createClass({
  mixins: [ImmutableRenderMixin],
  render() {
    return (
      <div className="user">
        <img src={this.props.avatar} />
        <span className="name">{this.props.name}</span>
        <Logout />
      </div>
    )
  }
});

export default UserBar;
