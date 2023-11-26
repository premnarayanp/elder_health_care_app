import React from 'react';
import { Link } from 'react-router-dom';
import {openProfilePage} from'../actions/authActionCreator';
import '../styles/navbar.css'
import { connect } from 'react-redux';

 function Navbar(props){
  const {auth,dispatch}=props;

  const handleOpenProfilePage=()=>{
    dispatch(openProfilePage(true));
  }

  return (
    auth.user?
      <div className="nav">
        <Link to="/">
           <button className='menuButton'>Home</button>
        </Link>

        <button className='profile_btn' onClick={handleOpenProfilePage}>
          <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
        </button>
      </div>
    :

      <div className="nav">
         <Link to="/users/signup">
          <button className='menuButton'>SignUp</button>
       </Link>

       <Link to="/users/login">
          <button className='menuButton'>Login</button>
       </Link>
      </div>
  );
}

function mapStateToProps(state){
  return{
   auth:state.auth
  }
}
const connectedNavbarComponent=connect(mapStateToProps)(Navbar);
export default connectedNavbarComponent;
