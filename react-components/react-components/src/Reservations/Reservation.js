import React from 'react';


export default class Reservation extends React.Component {
    render(){
        return(
            <Reservation name = {this.props.name}
                         date = {this.props.date}
                         site = {this.props.site} />

        )
    }
   

   
}