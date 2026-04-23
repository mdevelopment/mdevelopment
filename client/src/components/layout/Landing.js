import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../Landing.css';



class Landing extends Component {
  componentDidMount() {
  
   // console.log(this.props.auth)
  }

 
render() {

  const landingTrack = 'https://mdevelopment.com/mdevelopment%20-%20Ice%20Cream%20Space%20Mystery.mp3';
  const landingVideo = 'https://mdevelopment.com/dirty_ribbon_(loop)_v1%20(1080p)_2.mp4';



      const showInstructions = (
       <div style={{marginTop:'1.2em', marginBottom:'1.2em'}}   >
       
       
         <br/><div className="LandingHeader" >A blog of mdevelopment posts with<br/>links to all-digital, graphic, musical, and development creative work.<br/>A MERN stack using REDUX.</div>
       <br/>

        
         
       
       
                <h4   style={{paddingTop:'1.5em'}} >
            
                Please sign the guestbook. And view creative works.<br/>
                <span className="Artist"   style={{paddingTop:'.2em'}} >
               
               Cover animation by <a href="https://www.beeple-crap.com/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px'}}>mike winkelman</a>.
               </span>
                </h4>

               


            
                <Link to="/register" className="btn btn-md btn-info mr-2 btn-lg myBtnSignUp">
                  Sign
                </Link>
                <Link to="/login" className="btn btn-md btn-light btn-lg myBtnLogin">
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
          className="landingVideoFadeIn"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transform: 'scale(1.05)',
            transformOrigin: 'center center',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <source src={landingVideo} type="video/mp4" />
        </video>
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
          <div style={{color: '#fff', fontSize: '0.9rem', marginBottom: '8px', textAlign: 'left'}}>
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
