import React from 'react';
import { Chart } from "react-google-charts";

class PieChart extends React.Component {

    render() {
        const personsObj = this.props.persons;
        const signsObj = {};
        const data = [["Zodiac", "Amount"]];

        // create array of all signs, ex. ["Pisces", "Capricorn", "Leo"]
        const arrOfSigns = personsObj
            .map( currentValue => {
                return currentValue.sign;
            });

        // create hash table with Sign as a KEY and its Amount as VALUE and count each sign amount
        // ex. {Pisces: 3, Capricorn: 1, Leo: 1}
        arrOfSigns.forEach( sign => {
            signsObj[sign] ? signsObj[sign]++ : signsObj[sign] = 1;
        });

        // update data arr with each sign and its amount
        for (let sign in signsObj) {
            if ( sign !== '' ) {
                data.push([sign, signsObj[sign] ]);
            }
        }

        return (
            <Chart
                chartType="PieChart"
                data={data}
            />
        );
    }
}

export default PieChart;
