import React from 'react';


export default class NewReservationForm extends React.Component {

    state = {
        site: "",
        date: "",
        name: ""
    }

    render(){
        return(
            <form onChange={event => this.handleChange(event)} >
                <label>Site</label>
                <input name="site" type="text" value={this.state.site} />
                <br />
                <label>Date</label>
                <input name="date" type="text" value={this.state.date} />
                <br />
                <label>Name</label>
                <input name="name" type="text" value={this.state.name} />

                <input name="Submit" type="submit" value="Submit" onClick={e => this.handleClick(e)} />
            </form>
        )
    }

    handleChange = (event) => {
        console.log(event.target.value)
        // debugger
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.onReservationSubmit(this.state)
    }

}