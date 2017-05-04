import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navigation from './components/Nav.jsx';
// import Events from './components/Events.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      word: "Signup"
    }
  }


  render () {
    return (<div>
      <Navigation word={this.state.word} />
     

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

 // <Events events={this.state.events} />