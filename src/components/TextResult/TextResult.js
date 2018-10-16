import React from 'react';
import PropTypes from 'prop-types';

const textResult = (props) => {
  return (
      <React.Fragment>
          <p>The zodiac for <strong>{props.currentPerson.name}</strong> is <strong>{props.currentPerson.sign}</strong></p>
          <ul>
              {props.listOfPersons}
          </ul>
      </React.Fragment>
  );
}

export default textResult;

textResult.propTypes = {
    name: PropTypes.string,
    sign: PropTypes.string
};
