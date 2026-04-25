import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileActions';
import '../../MyFonts.css'

class Profiles extends Component {
  state = {
    showPrimaryCopy: false,
    showSecondaryCopy: false
  };

  componentDidMount() {
    this.props.getProfiles();

    this.primaryCopyTimer = window.setTimeout(() => {
      this.setState({ showPrimaryCopy: true });
    }, 40);

    this.secondaryCopyTimer = window.setTimeout(() => {
      this.setState({ showSecondaryCopy: true });
    }, 1040);
  }

  componentWillUnmount() {
    window.clearTimeout(this.primaryCopyTimer);
    window.clearTimeout(this.secondaryCopyTimer);
  }

  render() {
    const { profiles, loading } = this.props.profile;
    const primaryCopyClass = this.state.showPrimaryCopy ? 'fadeSlideVisible' : '';
    const secondaryCopyClass = this.state.showSecondaryCopy ? 'fadeSlideVisible' : '';
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h2>No profiles found...</h2>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h1 className={`display-4 text-center fadeSlideBase fadeSlideEndSoft ${primaryCopyClass}`}>Guest Book</h1>
              <h2 className={`lead text-center fadeSlideBase ${secondaryCopyClass}`} style={{marginBottom:'20px'}}>
                Check out other visitors!
              </h2>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
