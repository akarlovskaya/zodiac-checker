import React from 'react';
import PropTypes from 'prop-types';
import styles from './textResult.module.scss';

const textResult = (props) => {
    const {currentPerson} = props;

    if (!currentPerson) {
        return null;
    }

    const {sign, name} = currentPerson;

    const setSignIcon = (sign) => {
        let signIcon = '';

        switch (sign) {
            case 'Sagittarius':
                signIcon = '\u2650';
                break;
            case 'Capricorn':
                signIcon = '\u2651';
                break;
            case 'Aquarius':
                signIcon = '\u2652';
                break;
            case 'Pisces':
                signIcon = '\u2653';
                break;
            case 'Aries':
                signIcon = '\u2648';
                break;
            case 'Taurus':
                signIcon = '\u2649';
                break;
            case 'Gemini':
                signIcon = '\u264A';
                break;
            case 'Cancer':
                signIcon = '\u264B';
                break;
            case 'Leo':
                signIcon = '\u264C';
                break;
            case 'Virgo':
                signIcon = '\u264D';
                break;
            case 'Libra':
                signIcon = '\u264E';
                break;
            case 'Scorpio':
                signIcon = '\u264F';
                break;
            default: signIcon = '';

        }

        return signIcon;
    }

    return (
        <React.Fragment>
            <p>The zodiac for <strong className={styles.accentColor}>{name}
                </strong> is <strong>{sign}</strong>
                <span> {setSignIcon(sign)}</span>
            </p>
        </React.Fragment>
    );
}

export default textResult;

textResult.propTypes = {
    name: PropTypes.string,
    sign: PropTypes.string
};
