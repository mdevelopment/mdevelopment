import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../../Landing.css';
import Background from '../common/Manim2.gif';



class Landing extends Component {
  componentDidMount() {
  
   // console.log(this.props.auth)
  }

 
render() {



      const showInstructions = (
       <div style={{marginTop:'1.2em', marginBottom:'1.2em'}}   >
       <p className =""><br/><br/><span style={{color:'#ADD8E6'}} >ReactJS Web App</span><br/>blog of posts of thoughts<br/>and links to programming, graphic,<br/>and musical creative.
       <br/><i><small><span style={{color:'pink'}}>(In development)</span></small></i>
       </p>
                <h4   style={{paddingTop:'1.5em'}} >
                  {' '}
                <b>Please Sign Up/Sign the Guest Book and/or Log in<br/>to read and view posts.</b>
                </h4>
                {/*  <hr />*/}
                <Link to="/register" className="btn btn-md btn-info mr-2 btn-lg myBtnSignUp">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-md btn-light btn-lg myBtnLogin">
                  Log in
                </Link>
          </div>
      )

    return (


      <div className="landing" style={{paddingBottom:'500px',paddingTop:'0px',  backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height:'100%',
            backgroundColor: 'rgba(0, 0, 0, 1) !important' ,
            backgroundBlendMode:'color',
            backgroundRepeat: 'no-repeat'}}>
        {/* <div className="dark-overlay landing-inner text-light">*/}
        <div className="">
          <div className="container  ">
            <div className="row ">

                

              <div className="col-md-12 text-center" >
              
                { this.props.auth.isAuthenticated ? <div style={{paddingTop:'500px', paddingBottom:'500px',color:'pink'}}></div> : showInstructions }
                {/*console.log("IS IT AUTHED?: "+this.props.auth.isAuthenticated)*/}
              </div>

            </div>
          </div>
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
