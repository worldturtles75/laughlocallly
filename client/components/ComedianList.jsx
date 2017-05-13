import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
// import Container from 'muicss/lib/react/container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ComedianListItem from './ComedianListItem.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ComedianProfile from '../containers/ComedianProfile.jsx';

var styles = {
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


const ComedianList = ({comedians}) => (
  <div className="container">
    <div className="comedianListHeader">
      <h2> Comedians For You </h2>
    </div>

    <div style={styles.root}>
      <GridList cellHeight={400} cols={3} style={styles.gridList}>
          {comedians.map((obj) => (
              <MuiThemeProvider><ComedianListItem key={obj.id} item={obj} /></MuiThemeProvider>
            ))}
      </GridList>
    </div>
  
  </div>
  




)

export default ComedianList



