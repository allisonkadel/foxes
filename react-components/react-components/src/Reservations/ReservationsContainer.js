import React from 'react';
import NewReservationForm from './NewReservationForm.js';
import Reservations from './Reservations.js';


export default class ReservationsContainer extends React.Component {
    
    state = {
        reservations: [
            {site: "test",
            date: "27/05/2020",
            name: "test site"},
            {site: "trial",
            date: "24/07/2020",
            name: "test site"},
            {site: "example",
            date: "27/06/2020",
            name: "test suite"} 
        ]
    }

    render() {
        return (
            <div id="reservations">
                <NewReservationForm onReservationSubmit={this.onReservationSubmit} />
                <Reservations reservations={this.state.reservations} />
            </div>
        )
    }

    onReservationSubmit = (stat) => {
        this.setState(
            // {
            //     reservations: [...this.state.reservations, stat]
            // }
            (currentState) => { 
                return {reservations: [...currentState.reservations, stat]}
            }
        )
    }
        
}