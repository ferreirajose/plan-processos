import React from 'react';
import user from '../../assets/images/user.svg';

const Header = props => {
  return (
    <header className="main-header">
      <a href="/#/" className="logo">
        <span className="logo-lg">APP</span>
      </a>

      <nav className="navbar navbar-static-top">
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle dropdown-admin-image" data-toggle="dropdown" aria-expanded="false">
                <img src={user} className="admin-image" alt="User Image" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
