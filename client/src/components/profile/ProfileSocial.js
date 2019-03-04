import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import isEmpty from '../../validation/is-empty';
import '../../ProfileSocial.css'

//import PropTypes from 'prop-types';



class ProfileSocial extends Component {
  //constructor(props) {
    //super(props);
    
 // }

  render() {
   //console.log(this.props.profile);
    let twitterLink;
    let facebookLink;
    let linkedinLink;
    let instagramLink;
    let youtubeLink;
    
    //console.log(this.props.profile.social.twitter);

    if (this.props.profile.social && this.props.profile.social.twitter) {
      //console.log ("THIS TWITTER EXISTS")
      twitterLink = this.props.profile.social.twitter
    } else {
     // console.log ("THIS TWITTER DOES NOT EXIST")
      twitterLink = null
    }

    //FACEBOOK
    if (this.props.profile.social && this.props.profile.social.facebook) {
      //console.log ("THIS FACEBOOK EXISTS")
      facebookLink = this.props.profile.social.facebook;
    } else {
      //console.log ("THIS FACEBOOK DOES NOT EXIST")
      facebookLink = null;
    }

    //LINKEDIN
    if (this.props.profile.social && this.props.profile.social.linkedin) {
      //console.log ("THIS LINKEDIN EXISTS")
      linkedinLink = this.props.profile.social.linkedin;
    } else {
      //console.log ("THIS LINKEDIN DOES NOT EXIST")
      linkedinLink = null;
    }

    //INSTAGRAM
    if (this.props.profile.social && this.props.profile.social.instagram) {
      //console.log ("THIS INSTAGRAM EXISTS")
      instagramLink = this.props.profile.social.instagram;
    } else {
      //console.log ("THIS INSTAGRAM DOES NOT EXIST")
      instagramLink = null;
    }

    //YOUTUBE
    if (this.props.profile.social && this.props.profile.social.youtube) {
      //console.log ("THIS YOUTUBE EXISTS")
      youtubeLink = this.props.profile.social.youtube;
    } else {
      //console.log ("THIS YOUTUBE DOES NOT EXIST")
      youtubeLink = null;
    }

    const socialLinkList = (
      <div>

        <p className="mb-4">Social Networks</p>
        <div style={{marginTop:'0px'}}>
        <h2>Twitter:  <a target="_blank" href= {twitterLink} style={{color:'white'}}><span className="respBR">{twitterLink}</span></a> </h2><br/>
        <h2>FaceBook: <a target="_blank" href= {facebookLink} style={{color:'white'}}><span className="respBR">{facebookLink}</span></a> </h2><br/>
        <h2>LinkedIn: <a target="_blank" href= {linkedinLink} style={{color:'white'}}><span className="respBR">{linkedinLink}</span></a> </h2><br/> 
        <h2>YouTube Channel: <a target="_blank" href= {youtubeLink} style={{color:'white'}}><span className="respBR">{youtubeLink}</span></a>  </h2><br/>
        <h2>Instagram: <a target="_blank" href= {instagramLink} style={{color:'white'}}><span className="respBR">{instagramLink}</span></a> </h2> <br/> 
        </div>
    </div>
      )
    return (
      <div >
     { socialLinkList} 
      </div>
    );
  }
}

//ProfileGithub.propTypes = {
  //username: PropTypes.string.isRequired
//};

export default ProfileSocial;
