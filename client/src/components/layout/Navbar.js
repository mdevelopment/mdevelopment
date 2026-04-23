import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import logo from '../../img/logoM.svg';
import  '../../NavBar.css';
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;


    const authLinks = (
   
      <ul className="navbar-nav ml-auto" style={{paddingTop:'16px'}}>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/feed" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          >
            Creative
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/profiles" exact
            activeClassName="navMenuLinkActive"
            style={{fontSize:'1em',paddingLeft:'15px'}}
          >

            Guest Book
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/dashboard" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          >
            Your Dashboard
          </NavLink>
        </li>
        <li className="nav-item" style={{ color:'white'}} >
          <button
            type="button"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link navMenuButton"
            style={{fontSize:'1em',paddingLeft:'15px', background:'none', border:'none', cursor:'pointer'}}
          >
            Logout
          </button>
        </li>
      </ul>
    
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto"
      style={{ paddingTop:'12px', paddingLeft:'2px' }}
      >
      <li className="nav-item">
                <NavLink className="nav-link navMenuLink" to="/profiles" exact
               activeClassName="navMenuLinkActive"
               style={{fontSize:'1em',paddingLeft:'15px'}}
                >
                  {' '}
                  Guest Book
                </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/register" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em', paddingLeft:'15px'}}
          >
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/login" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          >
            Login
          </NavLink>
        </li>
       

      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-3 sticky-top myNavStyle" >
        <div className="container-fluid navDesktopAlign">
          <Link className="navbar-brand" to="/">
            <img
            style={{ width: '350px', marginLeft: '0px', marginTop:'0px'}}
            alt="logo"
              src={logo}
              className="logoM"
            />
          </Link>
          <button
            className="navbar-toggler removeThatBorder"            
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            style={{marginLeft:'2px'}}
          >
            <span className="navbar-toggler-icon removeThatBorder" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
