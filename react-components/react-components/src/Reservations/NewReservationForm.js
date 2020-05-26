import React from 'react';


export default class NewReservationForm extends React.Component {

    render(){
        return(
            <form>
                <label>Site</label>
                <input name="Site" type="text" />
                <br />
                <label>Date</label>
                <input name="Date" type="text" />
                <br />
                <label>Name</label>
                <input name="Name" type="text" />

                <input name="Submit" type="submit" value="Submit" />
            </form>
        )
            

    }
}