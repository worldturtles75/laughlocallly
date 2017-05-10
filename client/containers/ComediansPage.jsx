import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import {GridList, GridTile} from 'material-ui/GridList';
// import Container from 'muicss/lib/react/container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ComedianListItem from '../components/ComedianListItem.jsx';

class ComediansPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {
    comedians: []
  };

  this.styles = {
  root: {
    top: 60,
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    overflowY: 'auto',
  },
  }

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
      <div style={this.styles.root}>
        <GridList cellHeight={400} cols={3} style={this.styles.gridList}>
        {this.state.comedians.map((obj) => (
          <MuiThemeProvider><ComedianListItem item={obj} /></MuiThemeProvider>
          ))}
        </GridList>
      </div>

      )
  }

}

export default ComediansPage;

    // comedian: {
    //   id: '',
    //   name: '',
    //   bio: '',
    //   photo_url: '',
    //   twitter: '',
    //   video_url: '',
    //   website: ''
    // }