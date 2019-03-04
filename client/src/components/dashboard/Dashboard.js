import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
//import Experience from './Experience';
//import Education from './Education';
import '../../MyFonts.css';





class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    //console.log("FROM THE DASHBOARD: "+ JSON.stringify(this.props.auth));

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div >
            <p className="lead text-muted">
             <span style={{ textDecoration: 'none', color: 'white' }}>Welcome</span> <Link style={{ textDecoration: 'none', color: '#e0ec1d', fontSize:'1em' }} to={`/profile/${profile.handle}`} >{user.name}</Link>
            </p>
            <ProfileActions />
           
            <div style={{ marginBottom: '10px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn MyBtn2" style={{ color:'#FFFFFF !important' }}
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <div>
            <p >Welcome {user.name}</p>
            </div>
            <div>
            <div>
            <h2>Add a profile. Tell us a bit about yourself.  Share social links, a bio, ect..</h2>
            </div>
            <div style={{marginTop:'33px'}}>
            <Link to="/create-profile" className="btn btn-lg MyBtn" >
              Create Profile
            </Link>
            </div>
          </div>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12"  style={{marginTop:'40px'}}>
         
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
