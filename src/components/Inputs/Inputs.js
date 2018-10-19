import React from 'react';
import styles from './inputs.module.scss';

class Inputs extends React.Component {

    constructor() {
        super();

        this.state = {
            date: '',
            name: '',
            isDateValid: true,
            isNameValid: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // isNameValid(name)
    // {
    //     //
    // }

    handleSubmit(event) {
        event.preventDefault();

        const { name, date } = this.state;
        const { persons } = this.props;

        if(!this.isNameValid(name)) {
            this.setState({ isNameValid: false });
            // NotifyJS.showError("The name is invalid");
            return;
        }
        else if(date === '' || date.match()) {

        }
        else {

            this.props.handleSubmit(name, date);
            this.setState({ date: '', name: '', isDateValid: true, isNameValid: true });
        }
    }

    onChange(type, event) {
        this.setState({ [type]: event.target.value });
    }

    render() {

        const { date, name, isDateValid, isNameValid } = this.state;
        const { handleSubmit, displayErrors } = this.props;

    return (
        <form onSubmit={handleSubmit}
              noValidate
              className={ !isDateValid || !isNameValid ? styles.displayErrors : '' }>
              <p>{displayErrors}</p>
            <label htmlFor="date">Month and Day: </label>
            {/* <i class="fas fa-birthday-cake"></i> */}
            <input id="date"
                   type="text"
                   name="date"
                   value={date}
                   onChange={event => this.onChange('date', event)}
                   placeholder="MM/DD"
                   pattern="\d{2}\/\d{2}" // (0[1-9]|1[0-2])\/([0-1][0-9])
                   required /> <br/>

            <label htmlFor="name">Name: </label>
            <input id="name"
                   type="text"
                   name="name"
                   value={name}
                   onChange={event => this.onChange('name', event)}
                   required /> <br/>

            <input type="submit" />
        </form>
    );
    }
}

export default Inputs;
