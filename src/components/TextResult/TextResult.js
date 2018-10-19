import React from 'react';
import PropTypes from 'prop-types';
import styles from './textResult.module.scss';

const textResult = (props) => {
  const signCss = props.currentPerson.sign;

  return (
      <React.Fragment>
          <p>The zodiac for
          <strong className={styles.accentColor}> {props.currentPerson.name}</strong> is
          <span data-icon={signCss}> {props.currentPerson.sign} </span>
          </p>
          <span ></span>
      </React.Fragment>
  );
}

export default textResult;

textResult.propTypes = {
    name: PropTypes.string,
    sign: PropTypes.string
};
