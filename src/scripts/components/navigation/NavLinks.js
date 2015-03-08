import React from 'react';
import { Link } from 'react-router';

const NavLinks = React.createClass({
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><a href="#">All projects</a></li>
          <li><Link to="new-project">Add new</Link></li>
        </ul>
      </nav>
    )
  }
});

export default NavLinks;
