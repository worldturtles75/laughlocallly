import React from 'react';
import { Link } from 'react-router-dom';


const ComedianListItem = ({item}) => (
  <Link key={item.id} to={`/profile/${item.name}`}>
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src={item.photo_url} alt='...' />
      <div className="caption">
        <h3> {item.name} </h3>
        <p> {item.bio.slice(0,200)+'...'} </p>
      </div>
    </div> 
  </div>


  </Link>
)

export default ComedianListItem;

