import React from 'react';
import './App.css';
import WelcomeComponent from './Welcome_component.js';
import ReservationsContainer from './Reservations/ReservationsContainer.js';


function App() {
    return (
    <div>
      <WelcomeComponent />
      
      <ReservationsContainer />
      
      
    </div>
    )
  }

export default App;
