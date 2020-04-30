import PropTypes from 'prop-types';
import * as React from 'react';
import { navigate } from 'gatsby';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">MC</div>
    <div className="content">
      <div className="inner">
        <h1>Meadow Creek Primitive Baptist Church</h1>
        <p>A place of family-integrated worship, seeking to serve the true and living God.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro');
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work');
            }}
          >
            Events
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate('/blog/');
            }}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
