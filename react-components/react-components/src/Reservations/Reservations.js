import React from 'react';


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

    // renderReservations() {
    //     testData.forEach(reservation => {
    //         <div>
    //         {reservation.site}
    //         {reservation.date}
    //         {reservation.name}

    //         </div>
    //     })
    // }

    render(){
        return(
        this.testData.forEach(reservation => {
            return
                
                reservation.site,
                reservation.date,
                reservation.name
    
               
           
            }
        ))
    }
        
    

    // defaultProps = {
    //     site: "test",
    //     date: "27/05/2020",
    //     name: "test site"
    // }
}