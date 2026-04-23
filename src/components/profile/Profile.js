import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileSocial from './ProfileSocial';
//import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';
import '../../MyFonts.css'

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }

  }

  componentWillReceiveProps(nextProps) {
   
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {

    const { profile, loading } = this.props.profile;
    //console.log(profile +"I AM HERE")
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-dark mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
        {/*  <ProfileHeader profile={profile} /> */}
        <div>
          <ProfileAbout profile={profile} />
          {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null}
          </div>
          <div style={{marginTop:'50px'}}>
          <ProfileSocial profile={profile} />
          </div>
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row" style={{marginTop:'50px'}}>
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
