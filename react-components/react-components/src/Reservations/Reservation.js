import React from 'react';


export default class Reservation extends React.Component {
    render() {
        return (
            <ul>
            <li>{this.props.name}</li>
            <li>date = {this.props.date}</li>
            <li>site = {this.props.site}</li>
            </ul>

        )
    }
}


