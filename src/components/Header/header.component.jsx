import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import '../../styles/header.component.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/" className="option">
        CONTACT
      </Link>
      {/* <Link to="/signIn" className="option">
        SIGN IN
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        // <Link></Link>
        <Link to="/signIn" className="option">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
