import React from 'react';
import PropTypes from 'prop-types';

const textResult = (props) => {
  return (
      <React.Fragment>
          <p>The zodiac for <strong>{props.name}</strong> is <strong>{props.sign}</strong></p>
      </React.Fragment>
  );
}

export default textResult;

textResult.propTypes = {
    name: PropTypes.string,
    sign: PropTypes.string
};
