import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class ComedianProfile extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    const { name, bio, id, video_url } = this.props.comedian;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
              <div className="comedianheader">
                <h1> {name} </h1>
              </div>
              <p className="bio"> {bio} </p>
                <div>
                  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video_url.slice(32)}`} frameBorder='0' allowFullScreen />
                </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <Link to={{ pathname: "/book", state: {comedian: id} }}><button value={id} type="button" className="btn btn-default"> Book </button></Link>
              <div className="upcoming-events">
                Upcoming Events
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }



}

export default ComedianProfile
