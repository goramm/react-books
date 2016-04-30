import React, { PropTypes } from 'react';

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
