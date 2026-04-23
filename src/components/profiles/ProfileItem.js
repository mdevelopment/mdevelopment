import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from '../../validation/is-empty';
import { deleteProfile } from '../../actions/profileActions';
import adminKey from '../../config/adminKey';
import '../../MyFonts.css'

class ProfileItem extends Component {
  onDeleteClick(userId) {
    this.props.deleteProfile(userId);
  }

  render() {
    const { profile, auth } = this.props;
    const isAdmin = auth && auth.user && auth.user.id === adminKey.adminKey;

    return (
      <div>
        <div className="card card-body mb-3" style={{ backgroundColor: 'rgba(0, 61, 115, .6)' }}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 text-center">
              <p>{profile.user.name}</p>
              
              <h2 style={{color:'#e0ec1d',marginTop:'0px', paddingTop:'0px', marginBottom:'15px'}} >
                {isEmpty(profile.location) ? null : (
                  <span >{profile.location}</span>
                )}
              </h2>
              <Link to={`/profile/${profile.handle}`} className="btn  btn-lg MyBtnDetail detailMobile" >
                Detailed Profile
              </Link>
            </div>
          </div>
        </div>
        {isAdmin ? (
          <div style={{ marginTop: '2px', textAlign: 'right', marginBottom: '6px' }}>
            <button
              onClick={this.onDeleteClick.bind(this, profile.user._id)}
              type="button"
              className="btn btn-sm mr-1 deleteBtn"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteProfile })(ProfileItem);
