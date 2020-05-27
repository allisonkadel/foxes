import React from 'react';
import Reservation from './Reservation.js'


export default class Reservations extends React.Component {
    testData = [
        {site: "test",
        date: "27/05/2020",
        name: "test site"},
        {        site: "test",
        date: "27/05/2020",
        name: "test site"},
        {site: "test",
        date: "27/05/2020",
        name: "test site"} 
    ]

    generateReservations = () => {
        // map over your movieData array and return an array of the correct JSX
        return this.testData.map((reservation, index) => <Reservation
          key = {index}
          site = {reservation.site}
          name = {reservation.name}
          date = {reservation.date}
          />)
    
        };
    render() {
        return (
            <div id="reservations">
            {this.generateReservations()}
            </div>
        )
        }

   
}