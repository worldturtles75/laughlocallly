import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import $ from 'jquery';
// import {GridList, GridTile} from 'material-ui/GridList';
// import Container from 'muicss/lib/react/container';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import ComedianListItem from '../components/ComedianListItem.jsx';
// import ComedianList from '../components/ComedianList.jsx';
// import ComedianProfile from './ComedianProfile.jsx';

class ComediansPage extends React.Component{
  constructor(props){
  super(props);  
 
 this.state = {
    comedians: []
  };

 }

 componentWillMount(){
    var context=this;
    $.get('/getComedians')
     .done(function(data){
        console.log(data, 'COMEDIAN DATA');
        context.setState({comedians: data});
     })
     .fail(function(err){
        console.error(err, "ERROR RECEIVING INFO")
     })
  }

 render () {
    return (
        <div>
        {console.log('this.state.comedians', this.state.comedians)}
       </div>

     
   

     )
  }

}

export default ComediansPage;