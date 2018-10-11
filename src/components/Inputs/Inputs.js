import React from 'react';
import TextResult from '../TextResult/TextResult';

class Inputs extends React.Component {
  state = {
      inputs: {
          date: '',
          name: ''
      },
      sign: '',
      displayErrors: false
  }

  checkZodiac = (dob) => {
    const date = new Date(dob);
    let z = '';

    if ( new Date('01/20') <= date && date <= new Date('02/18') ) {
        z = 'Aquarius';
    } else if ( new Date('02/19') <= date && date <= new Date('03/20') ) {
        z = 'Pisces';
    } else if ( new Date('03/21') <= date && date <= new Date('04/20') ) {
        z = 'Aries';
    } else if ( new Date('04/21') <= date && date <= new Date('05/20') ) {
        z = 'Taurus';
    } else if ( new Date('05/21') <= date && date <= new Date('06/20') ) {
        z = 'Gemini';
    } else if ( new Date('06/21') <= date && date <= new Date('07/22') ) {
        z = 'Cancer';
    } else if ( new Date('07/23') <= date && date <= new Date('08/22') ) {
        z = 'Leo';
    } else if ( new Date('08/23') <= date && date <= new Date('09/23') ) {
        z = 'Virgo';
    } else if ( new Date('09/24') <= date && date <= new Date('10/23') ) {
        z = 'Libra';
    } else if ( new Date('10/24') <= date && date <= new Date('11/21') ) {
        z = 'Scorpio';
    }
    else if ( new Date('11/22') <= date && date <= new Date('12/21') ) {
        z = 'Sagittarius';
    }
    // else if ( new Date('01/19') <= date && date <= new Date('12/22') ) {
    //     z = 'Capricorn';
    // }
    else {
        z = 'none';
    }
    return z;
}

  handleSubmit = (event) => {
      event.preventDefault();
      if (!event.target.checkValidity()) {
        // form is invalid
        this.setState({ displayErrors: true });
        return;
      }

      const form = event.target;
      const data = new FormData(form);
      const updatedState = {...this.state.inputs};

      for ( let name of data.keys()) {
          const input = form.elements[name];
          updatedState[name] = input.value;
      }

      const sign = this.checkZodiac(updatedState.date);

      this.setState({
          inputs: updatedState,
          sign: sign,
          displayErrors: false
      });

      this.clearInputs();
  }

  clearInputs = () => {
      document.getElementById("date").value = '';
      document.getElementById("name").value = '';
  }

  render() {
    const { displayErrors } = this.state;
    console.log(displayErrors);
    return (
        <React.Fragment>
            {/* "noValidate" prevents the browser from interfering when an invalid form is submitted so that we can “interfere” ourselves
            https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f */}
            <form onSubmit={this.handleSubmit}
                  noValidate
                  className={ displayErrors ? 'displayErrors' : '' }>
                <label htmlFor="date">Month and Day: </label>
                <input id="date"
                       type="text"
                       name="date"
                       placeholder="MM/DD"
                       pattern="\d{2}\/\d{2}"
                       required /> <br/>

                <label htmlFor="name">Name: </label>
                <input id="name"
                       type="text"
                       name="name"
                       required /> <br/>

                <input type="submit" />
            </form>
            {
                this.state.sign ? <TextResult sign={this.state.sign} name={this.state.inputs.name}/> : null
            }

        </React.Fragment>
    );
  }
}

export default Inputs;
