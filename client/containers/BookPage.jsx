import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

class BookPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {
      host: {
        name: "",
        email: "",
        phone: ""
      },
      venue: {
        address: "",
        zipcode: "",
        photo_url: "",
        capacity: ""
      },
      event: {
        name: "",
        description: "",
        photo_url: "",
        date: "",
        start_time: "",
        end_time: "",
        comedian_id: this.props.location.state.comedian.id,
        status: "pending"
      }
  }

  this.handleHostInput = this.handleHostInput.bind(this);
  this.handleVenueInput = this.handleVenueInput.bind(this);
  this.handleEventInput = this.handleEventInput.bind(this);

  }
  
  handleHostInput(e){
    const field = e.target.name;
    const host = this.state.host;
    host[field] = e.target.value; 
    this.setState({host});
  }

  handleVenueInput(e){
    const field = e.target.name;
    const venue = this.state.venue;
    venue[field] = e.target.value; 
    this.setState({venue});
    console.log(this.state.venue)
  }

  handleEventInput(e){
    const field = e.target.name;
    const event = this.state.event;
    event[field] = e.target.value; 
    this.setState({event});
    console.log(this.state.event)
  }

  render () {
    return (
     <div className="container"> 
      <h2> Laugh With {this.props.location.state.comedian.name}</h2>
      
      <div className="eventformheader"> About Your Event </div>
      <form>
        <div className="form-group">
          <label> Name </label>
          <input id="eventname" type="text" className="form-control" name="name" placeholder="Enter a short event name" onChange={this.handleEventInput} value={this.state.event.name} />

          <label> Description </label>
          <textarea rows="3" id="eventdesc" type="text" className="form-control" name="description" onChange={this.handleEventInput} value={this.state.event.description} placeholder="A few sentences to give the comedian a sense of what your event is about" />

          <label> Location </label>
          <input id="eventloc" type="text" className="form-control" onChange={this.handleVenueInput} value={this.state.venue.address} name="address" placeholder="Address" />
          <input id="eventloc" type="number" className="form-control" name="zipcode" onChange={this.handleVenueInput} value={this.state.venue.zipcode} placeholder="Zipcode" />

          <label> Audience Size </label>
          <select id="eventcap"  className="form-control" name="capacity" onChange={this.handleVenueInput}>
            <option value="1-20"> 1 - 20 </option>
            <option value="21-50"> 21 - 50 </option>
            <option value="51-100"> 51 - 100 </option>
            <option value="101-500"> 101 - 500 </option>
            <option value="501-1000"> 501 - 1000 </option>
            <option value="1001+"> 1001+ </option>
          </select> 

          <label> Event Name </label>
          <input id="eventname" type="text" className="form-control" name="eventname" placeholder="Enter a short event name" />
        
        <div className="eventformheader"> About You </div>

        <button type="submit" className="btn btn-default"> Submit </button>
        </div>
      </form>

     <p> </p>
     </div>
      )
  }

}

export default BookPage;