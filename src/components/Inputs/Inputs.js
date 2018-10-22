import React from 'react';
import styles from './inputs.module.scss';

class Inputs extends React.Component {
    // props: handleOnSubmit(), persons[], displayErrors Boolen

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
        if ( name.length <= 1 ) {
            return false;
        } else {
            return true;
        }
    }

    // '02/10'
    isDateValid(date) {
        // const dateArr = date.split('/'); // ["02", "10"]
        const regex = new RegExp('/^(0[1-9]|1[012])/([012]\d|3[01])$', 'g') ;
        console.log('in isDateValid');
        console.log(regex);

        if ( date.match(regex) ) {
            console.log('matched');
            // return true;
        } else {
            console.log('not matched:', date.match(regex));
            // return false;
            // console.log('not matched');
            // this.showError('#nameError', '<span>😐</span> Error: Enter date as MM/DD');
        }
      //   const months = [ "january", "february", "march", "april", "may", "june",
      // "july", "august", "september", "october", "november", "december" ];
      //   console.log(dateArr);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, date } = this.state;
        // console.log(name, date);
        // const { persons } = this.props;


        if( !this.isNameValid(name) ) {
            this.setState({ isNameValid: false });
            this.showError('#nameError', '<span>😐</span> Error: Name should be more then three chars');
            // NotifyJS.showError("The name is invalid");
            return;
        }
        else if( date === '' || !this.isDateValid(date) ) {
            this.setState({ isDateValid: false });
            this.showError('#dateError', '<span>😐</span> Error: Enter valid date in MM/DD format');
            return;
        }
        // else {
            //
            // this.props.handleOnSubmit(name, date);
            // this.setState({ date: '', name: '', isDateValid: true, isNameValid: true });
        // }
        console.log('this.state: ', this.state);
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
            }, 3000);
        }
    }

    convertToDayAndMonth = (str) => {
        const date = str.split('/');
        const months = [ "january", "february", "march", "april", "may", "june",
      "july", "august", "september", "october", "november", "december" ];
        const month = months[new Date(str).getMonth()];
        const day = parseInt(date[1], 10);
         return {
            month,
            day
        }
    }

    clearInputs() {
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
    }

    render() {
        // console.log('this.state: ', this.state);
        // console.log('this.props: ', this.props);
        const { date, name, isDateValid, isNameValid } = this.state;
        const { handleSubmit, displayErrors } = this.props;

    return (
        <form onSubmit={this.handleSubmit}
              noValidate
              className={ !isDateValid || !isNameValid ? styles.displayErrors : '' }>
              <p>{displayErrors}</p>
              <label htmlFor="name">Name<sup>*</sup> </label>
              <input id="name"
                     type="text"
                     name="name"
                     value={name}
                     onChange={event => this.onChange('name', event)}
                     required />
                     <small className={styles.error} id="nameError">
                         {/* <span>😐</span> */}
                         {/* Error: Name should be more then three chars */}
                     </small>
                     <br/>
            <label htmlFor="date">Month and Day<sup>*</sup> </label>
            {/* <i class="fas fa-birthday-cake"></i> */}
            <input id="date"
                   type="text"
                   name="date"
                   value={date}
                   onChange={event => this.onChange('date', event)}
                   placeholder="MM/DD"
                   pattern="\d{2}\/\d{2}" // (0[1-9]|1[0-2])\/([0-1][0-9])
                   required />
                   <small className={styles.error} id="dateError">
                       {/* <span>😐</span> */}
                       {/* Error: Name should be more then three chars */}
                   </small>

                   <br/>



            <input type="submit" />
        </form>
    );
    }
}

export default Inputs;
