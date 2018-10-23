import React from 'react';
import styles from './form.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faUser } from '@fortawesome/free-solid-svg-icons';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            name: '',
            isDateValid: true,
            isNameValid: true
        };
    }

    isNameValid(name) {
        const nameRegex = /^[a-zA-Z ]{3,30}$/;
        return name.match(nameRegex);
    }

    // input '02/10'
    isDateValid(date) {
        const dateArr = date.split('/'); // ["02", "10"]
        const dayAndMonthRegex = /^\d{2}\/\d{2}$/;
        const month = parseInt(dateArr[0], 10);
        const day = parseInt(dateArr[1], 10);

        if ( date.match(dayAndMonthRegex) ) {
            return month >= 1 && month <= 12 && day >= 1 && day <= 31;
        } else {
            return false;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, date } = this.state;

        if ( name === '' || date === '') {
            this.setState({ isNameValid: false, isDateValid: false });
            return;
        }

        if( !this.isNameValid(name) ) {
            this.setState({ isNameValid: false });
            this.showError('#nameError', '<span>😐</span> Error: Name should contain only letters and minimum three characters');
            return;
        }
        else if( !this.isDateValid(date) ) {
            this.setState({ isDateValid: false });
            this.showError('#dateError', '<span>😐</span> Error: Enter valid date in MM/DD format');
            return;
        }
        else {
            this.props.handleOnSubmit(name, date);
            this.setState({ date: '', name: '', isDateValid: true, isNameValid: true });
        }

        this.clearInputs();
    }

    onChange(type, event) {
        this.setState({ [type]: event.target.value });
    }

    showError = (elId, msg) => {
        if (elId) {
            const errorEl = document.querySelector(elId);
            errorEl.classList.add(`${styles.shown}`);
            errorEl.innerHTML = msg;

            setTimeout(() => {
                errorEl.classList.remove(`${styles.shown}`);
            }, 4000);
        }
    }

    clearInputs() {
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
    }

    render() {
        const { date, name, isDateValid, isNameValid } = this.state;

    return (
        <form onSubmit={this.handleSubmit}
              noValidate
              className={ !isDateValid && !isNameValid ? styles.displayErrors : '' }
              >
              <label htmlFor="name">Name<sup>*</sup> </label>
              <span className={styles.icons}>
                  <FontAwesomeIcon icon={faUser} />
              </span>
              <input id="name"
                     type="text"
                     name="name"
                     value={name}
                     onChange={event => this.onChange('name', event)}
                     required />
                     <small className={styles.error} id="nameError"></small>
                     <br/>
            <label htmlFor="date">Month and Day<sup>*</sup> </label>
            <span className={styles.icons}>
                <FontAwesomeIcon icon={faBirthdayCake} />
            </span>
            <input id="date"
                   type="text"
                   name="date"
                   value={date}
                   onChange={event => this.onChange('date', event)}
                   placeholder="MM/DD"
                   required />
                   <small className={styles.error} id="dateError"></small>
                   <br/>
            <input type="submit" />
        </form>
    );
    }
}

export default Form;
