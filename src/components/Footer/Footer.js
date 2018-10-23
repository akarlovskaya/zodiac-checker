import React from 'react';

const footer = (props) => {
  return (
      <footer style={footerStyle}>
          <small>
              by <a href="http://annakarlovskaya.com/" target="blank">Anna Karlovskaya</a>, 2018
          </small>
      </footer>
  );
}

export default footer;

const footerStyle = {
    textAlign: 'center'
}
