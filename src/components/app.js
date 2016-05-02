import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

App.PropTypes = {
  children: PropTypes.node
};

export default App;
