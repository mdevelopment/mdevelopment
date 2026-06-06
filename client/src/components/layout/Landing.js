import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../Landing.css';



class Landing extends Component {
  state = {
    showPrimaryCopy: false,
    showSecondaryCopy: false,
    showSignCta: false
  };

  componentDidMount() {
    this.primaryCopyTimer = window.setTimeout(() => {
      this.setState({ showPrimaryCopy: true });
    }, 40);

    this.secondaryCopyTimer = window.setTimeout(() => {
      this.setState({ showSecondaryCopy: true });
    }, 1040);

    this.signCtaTimer = window.setTimeout(() => {
      this.setState({ showSignCta: true });
    }, 1580);
  }

  componentWillUnmount() {
    window.clearTimeout(this.primaryCopyTimer);
    window.clearTimeout(this.secondaryCopyTimer);
    window.clearTimeout(this.signCtaTimer);
  }

  scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

 
render() {
  const primaryCopyClass = this.state.showPrimaryCopy ? 'fadeSlideVisible' : '';
  const secondaryCopyClass = this.state.showSecondaryCopy ? 'fadeSlideVisible' : '';
  const signCtaClass = this.state.showSignCta ? 'fadeSlideVisible' : '';

  const landingTrack = 'https://mdevelopment.com/mdevelopment%20-%20Ice%20Cream%20Space%20Mystery.mp3';
  const landingVideo = 'https://mdevelopment.com/dirty_ribbon_(loop)_v1%20(1080p)_2.mp4';



      const showInstructions = (
       <div className="landingInstructions" style={{marginTop:'1.2em', marginBottom:'1.2em'}}   >
       
       
           <br/><h1 className={`LandingHeader fadeSlideBase fadeSlideEndSoft ${primaryCopyClass}`} >A blog of mdevelopment posts with<br/>links to all-digital, graphic, musical, and development creative work.</h1>

        
         
       
       
                <p className={`fadeSlideBase LandingSubcopy ${secondaryCopyClass}`} style={{paddingTop:'0.7em', marginBottom:'0.9em'}} >
                Please sign the guestbook!<br/>
           
           
                </p>


               


            
                <Link to="/login" className={`btn btn-md btn-light btn-lg myBtnLogin fadeSlideBase ${signCtaClass}`} aria-label="Log in to your existing account">
                  Log in
                </Link>
          </div>
      )

    return (


      <div className="landing" style={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '0px',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        height: '100vh',
        minHeight: '100vh',
            backgroundColor: '#000'
          }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={landingVideo}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
        {/* <div className="dark-overlay landing-inner text-light">*/}
        <div className="" style={{position: 'relative', zIndex: 2}}>
          <div className="container  ">
            <div className="row ">

              <div className="col-md-12 text-center" >
              
                { this.props.auth.isAuthenticated ? <div style={{paddingTop:'500px', paddingBottom:'500px',color:'pink'}}></div> : showInstructions }
                {/*console.log("IS IT AUTHED?: "+this.props.auth.isAuthenticated)*/}
              </div>

            </div>
          </div>
        </div>











        
        <div
          className="landingAudioPlayer"
          style={{
            position: 'fixed',
            left: '40px',
            bottom: '20px',
            width: 'min(360px, calc(100vw - 40px))',
            zIndex: 2000,
            padding: '12px 14px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.78)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 16px 20px rgba(0, 0, 0, 0.35)'
          }}
        >
          <div className="landingAudioTitle" style={{color: '#fff', fontSize: '0.9rem', marginBottom: '8px', textAlign: 'left'}}>
            Play: Ice Cream Space Mystery - by mdevelopment
          </div>
          <audio
            controls
            preload="none"
            style={{display: 'block', width: '100%'}}
            src={landingTrack}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
        { !this.props.auth.isAuthenticated && (
          <div
            className="landingFooterCredit"
            style={{
              position: 'fixed',
              left: '50%',
              bottom: '39px',
              transform: 'translateX(-50%)',
              width: 'calc(100vw - 24px)',
              maxWidth: '640px',
              zIndex: 2002,
              color: 'rgba(255, 255, 255, 0.92)',
              textAlign: 'center',
              fontSize: 'clamp(0.82rem, 1.45vw, 0.96rem)',
              lineHeight: 1.2,
              letterSpacing: '0.02em'
            }}
          >
            Cover animation by <a href="https://www.beeple-crap.com/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px'}}>mike winkelman</a>.
          </div>
        )}
        { !this.props.auth.isAuthenticated && (
          <div
            className="landingFooterTagline"
            style={{
              position: 'fixed',
              left: '50%',
              bottom: '15px',
              transform: 'translateX(-50%)',
              width: 'calc(100vw - 24px)',
              maxWidth: '640px',
              zIndex: 2001,
              color: 'rgba(255, 255, 255, 0.92)',
              textAlign: 'center',
              fontSize: 'clamp(0.78rem, 1.35vw, 0.9rem)',
              lineHeight: 1.2,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              pointerEvents: 'none'
            }}
          >
            A MERN stack using REDUX.
          </div>
        )}
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
