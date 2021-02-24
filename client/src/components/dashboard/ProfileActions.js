import React from 'react';
import { Link } from 'react-router-dom';
import '../../MyFonts.css';


const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-lg MyBtn3" >
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
    </div>
  );
};

export default ProfileActions;



