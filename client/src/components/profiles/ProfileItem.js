import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import '../../MyFonts.css'

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body mb-3" style={{ backgroundColor: 'rgba(0, 61, 115, .6)' ,
            
           }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text-center">
            <p>{profile.user.name}</p>
            
            <h2 style={{color:'#e0ec1d',marginTop:'0px', paddingTop:'0px', marginBottom:'15px'}} >
              {isEmpty(profile.location) ? null : (
                <span >{profile.location}</span>
              )}
            </h2>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info MyBtn">
              Detailed Profile
            </Link>
          </div>
         
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
