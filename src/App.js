import React, { Component } from 'react';
import styles from './App.module.scss';
import Inputs from './components/Inputs/Inputs';
import TextResult from './components/TextResult/TextResult';
import Table from './components/Table/Table';
import PieChart from './components/Chart/Chart';
import uuid from 'uuid';

class App extends Component {
    state = {
        person: {
            id: null,
            sign: ''
        },
        persons: [],
        displayErrors: false
    }

    onSubmit = (name, date) => {
        const sign = this.checkZodiac(date);
        const person = {id: uuid(), date, name, sign};

        this.setState({
            person,
            persons: this.state.persons.concat(person),
            displayErrors: false
        });
        console.log(this.state);
    }

    checkZodiac = (str) => {
      let zodiac_sign = '';
      const date = str.split('/');
      const months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
      const month = months[new Date(str).getMonth()];
      const day = parseInt(date[1], 10);

      if (month === 'december') {
          if (day < 22) {
              zodiac_sign = 'Sagittarius';
          } else {
              zodiac_sign = 'Capricorn';
          }
      } else if (month === "january") {
          if (day < 20) {
              zodiac_sign = "Capricorn";
          } else {
              zodiac_sign = "Aquarius";
          }
      } else if (month === "february") {
          if (day < 19) {
              zodiac_sign = "Aquarius";
          } else {
              zodiac_sign = "Pisces";
          }
      } else if(month === "march") {
          if (day < 21) {
              zodiac_sign = "Pisces";
          } else {
              zodiac_sign = "Aries";
          }
      } else if (month === "april") {
          if (day < 20) {
              zodiac_sign = "Aries";
          } else {
              zodiac_sign = "Taurus";
          }
      } else if (month === "may") {
          if (day < 21) {
              zodiac_sign = "Taurus";
          } else {
              zodiac_sign = "Gemini";
          }
      } else if( month === "june") {
          if (day < 21) {
              zodiac_sign = "Gemini";
          } else {
              zodiac_sign = "Cancer";
          }
      } else if (month === "july") {
          if (day < 23) {
              zodiac_sign = "Cancer";
          } else {
              zodiac_sign = "Leo";
          }
      } else if( month === "august"){
          if (day < 23) {
              zodiac_sign = "Leo";
          } else {
              zodiac_sign = "Virgo";
          }
      } else if (month === "september"){
          if (day < 23) {
              zodiac_sign = "Virgo";
          } else {
              zodiac_sign = "Libra";
          }
      } else if (month === "october"){
          if (day < 23) {
              zodiac_sign = "Libra";
          } else {
              zodiac_sign = "Scorpio";
          }
      } else if (month === "november") {
          if (day < 22) {
              zodiac_sign = "Scorpio";
          } else {
              zodiac_sign = "Sagittarius";
          }
      }
      // console.log(zodiac_sign);
      return zodiac_sign;
    }



    render() {
      const { person, persons, displayErrors } = this.state;
      const listOfPersons = persons.map(person => {
          if ( person.date !== '' && person.name !== '' ) {
              return (
                  <tr key={person.id}>
                      <td>{person.name}</td>
                      <td>{person.sign}</td>
                  </tr>
              )
          }
      });

    return (
      <div className={styles.App}>
          <h1>Title here</h1>
          <p>Enter Birthday and Name of a person</p>
          <hr/>

          <Inputs handleOnSubmit={this.onSubmit} persons={persons} displayErrors={displayErrors}/>

          { person.id ? <TextResult currentPerson={person}/> : null }

          <div
              className={`${styles.resultWrapper}
                          ${styles.fadein}
                          ${listOfPersons.length > 0 ? styles.fadeinActive : ""}
                          `}
                          >
              <Table listOfPersons={listOfPersons}/>
              <PieChart persons={persons} />
          </div>

      </div>
    );
  }
}

export default App;
