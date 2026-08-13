import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import logo from '../../img/logoM.svg';
import  '../../NavBar.css';
class Navbar extends Component {
  state = {
    isMobileMenuOpen: false
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen
    }));
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };

  onLogoutClick(e) {
    e.preventDefault();
    this.closeMobileMenu();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const hasAdminPrivileges = Boolean(isAuthenticated && user.isAdmin);
    const hasSignedGuestbook =
      typeof window !== 'undefined' && Boolean(localStorage.getItem('guestbookUserId'));


    const memberLinks = (
   
      <ul className="navbar-nav ml-auto" style={{paddingTop:'16px'}}>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/feed" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          onClick={this.closeMobileMenu}
          >
            Creative
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/profiles" exact
            activeClassName="navMenuLinkActive"
            style={{fontSize:'1em',paddingLeft:'15px'}}
            onClick={this.closeMobileMenu}
          >

            Guest Book
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/dashboard" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          onClick={this.closeMobileMenu}
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
            Log out
          </button>
        </li>
      </ul>
    );

    const adminLinks = (
      <ul className="navbar-nav ml-auto" style={{paddingTop:'16px'}}>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/feed" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          onClick={this.closeMobileMenu}
          >
            Creative
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/profiles" exact
            activeClassName="navMenuLinkActive"
            style={{fontSize:'1em',paddingLeft:'15px'}}
            onClick={this.closeMobileMenu}
          >

            Guest Book
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link navMenuLink" to="/dashboard" exact
          activeClassName="navMenuLinkActive"
          style={{fontSize:'1em',paddingLeft:'15px'}}
          onClick={this.closeMobileMenu}
          >
            Your Dashboard
          </NavLink>
        </li>
        <li className="nav-item" style={{paddingLeft:'15px', display:'flex', alignItems:'center'}}>
          <span className="badge badge-warning" style={{fontSize:'0.78rem', letterSpacing:'0.04em'}}>
            Admin
          </span>
        </li>
        <li className="nav-item" style={{ color:'white'}} >
          <button
            type="button"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link navMenuButton"
            style={{fontSize:'1em',paddingLeft:'15px', background:'none', border:'none', cursor:'pointer'}}
          >
            Log out
          </button>
        </li>
      </ul>
    
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto"
      style={{ paddingTop:'12px', paddingLeft:'2px' }}
      >
      <li className="nav-item">
                <NavLink className="nav-link navMenuLink" to="/feed" exact
               activeClassName="navMenuLinkActive"
               style={{fontSize:'1em',paddingLeft:'15px'}}
               onClick={this.closeMobileMenu}
                >
                  {' '}
                  Creative
                </NavLink>
        </li>
      <li className="nav-item">
                <NavLink className="nav-link navMenuLink" to="/profiles" exact
               activeClassName="navMenuLinkActive"
               style={{fontSize:'1em',paddingLeft:'15px'}}
               onClick={this.closeMobileMenu}
                >
                  {' '}
                  Guest Book
                </NavLink>
        </li>
        {!hasSignedGuestbook ? (
          <li className="nav-item">
            <NavLink className="nav-link navMenuLink" to="/register" exact
            activeClassName="navMenuLinkActive"
            style={{fontSize:'1em', paddingLeft:'15px'}}
            onClick={this.closeMobileMenu}
            >
              Sign
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink className="nav-link navMenuLink" to="/login" exact
            activeClassName="navMenuLinkActive"
            style={{fontSize:'1em', paddingLeft:'15px'}}
            onClick={this.closeMobileMenu}
            >
              Log in
            </NavLink>
          </li>
        )}
       

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
            aria-controls="mobile-nav"
            aria-expanded={this.state.isMobileMenuOpen}
            onClick={this.toggleMobileMenu}
            style={{marginLeft:'2px'}}
          >
            <span className="navbar-toggler-icon removeThatBorder" />
          </button>

          <div
            className={`navbar-collapse ${this.state.isMobileMenuOpen ? 'show' : 'collapse'}`}
            id="mobile-nav"
          >
            {isAuthenticated ? (hasAdminPrivileges ? adminLinks : memberLinks) : guestLinks}
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
