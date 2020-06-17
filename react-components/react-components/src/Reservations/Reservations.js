import React from 'react';
import Reservation from './Reservation.js'


export default class Reservations extends React.Component {
    // testData = [
    //     {site: "test",
    //     date: "27/05/2020",
    //     name: "test site"},
    //     {        site: "trial",
    //     date: "24/07/2020",
    //     name: "test site"},
    //     {site: "example",
    //     date: "27/06/2020",
    //     name: "test suite"} 
    // ]

    generateReservations = () => {
        // map over your movieData array and return an array of the correct JSX
        return this.props.reservations.map(reservation => <Reservation site = {reservation.site} name = {reservation.name} date = {reservation.date} />)
        // return this.testData.map(reservation => "WILD")
        };
    render() {
        return (
            <div id="reservations">
            {this.generateReservations()}
            </div>
        )
        }

   
}