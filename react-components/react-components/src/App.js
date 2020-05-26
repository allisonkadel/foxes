import React from 'react';
import './App.css';
import WelcomeComponent from './Welcome_component.js';
import NewReservationForm from './Reservations/NewReservationForm.js';
import Reservations from './Reservations/Reservations.js';

function App() {
    return (
    <div>
      <WelcomeComponent />
      
      <NewReservationForm />
      <Reservations />
      
    </div>
    )
  }

export default App;
