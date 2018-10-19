import React from 'react';
import styles from './inputs.module.scss';

class Inputs extends React.Component {

  render() {

    return (
        <React.Fragment>
            {/* "noValidate" prevents the browser from interfering when an invalid form is submitted so that we can “interfere” ourselves
            https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f */}

            <form onSubmit={this.props.handleSubmit}
                  noValidate
                  className={ this.props.displayErrors ? styles.displayErrors : '' }>
                  <p>{this.props.displayErrors}</p>
                <label htmlFor="date">Month and Day: </label>
                {/* <i class="fas fa-birthday-cake"></i> */}
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
        </React.Fragment>
    );
  }
}

export default Inputs;
