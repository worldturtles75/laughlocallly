import React from 'react';
import $ from 'jquery';
import PendingEvent from './PendingEvent.jsx';

class PendingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingEventList: []
    }
    
    this.getPendingEvent = this.getPendingEvent.bind(this);
  }

  componentDidMount() {
    this.getPendingEvent();
  }

  getPendingEvent() {
    $.get('/getPendingEvents', {id: this.props.comedianInfo.id})
    .done(data => {
      this.setState({
        pendingEventList: data
      })
    })
  }

  render() {
    console.log('pending events list', this.state.pendingEventList)
    return (
      <div> 
        <h3>Pending event details!</h3>
        {this.state.pendingEventList.map((pending) => <PendingEvent pending={pending} key={pending.id}/> )} 
      </div>
    );
  }
}

export default PendingEvents;
