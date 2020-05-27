import React from 'react';
import NewReservationForm from './NewReservationForm.js';
import Reservations from './Reservations.js';


export default class ReservationsContainer extends React.Component {
    
    render() {
        return (
            <div id="reservations">
                <NewReservationForm />
                <Reservations />
            </div>
        )
        }

   
}