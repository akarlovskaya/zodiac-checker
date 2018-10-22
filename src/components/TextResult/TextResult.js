import React from 'react';
import PropTypes from 'prop-types';
import styles from './textResult.module.scss';
const textResult = (props) => {

    const {currentPerson} = props;

    if (!currentPerson) {
        return null;
    }

    const {sign, name} = currentPerson;

    return (
        <React.Fragment>
            <p>The zodiac for <strong className={styles.accentColor}>{name}
                </strong> is <strong>{sign}</strong>
                {/* <span className={'myicons-' + sign}/> */}
                {/* <span data-icon={sign}>
                    {sign}
                </span> */}
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
