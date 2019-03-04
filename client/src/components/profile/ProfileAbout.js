import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import '../../MyFonts.css';
//import {checkURL} from '../../utils/checkURL';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];


    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark mb-3 text-center">

            <span className="profileName">{firstName}'s Bio</span>
         
              {isEmpty(profile.bio) ? (
                <h3>{firstName} does not have a bio</h3>
              ) : (
         <div>
                <h3>{profile.bio}</h3>
                  <h4><a target="_blank" href= {profile.website} style={{color:'white'}}><span className="respBR">{profile.website}</span></a> </h4><br/>
             
             </div>

              )}
          
          </div>

        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
