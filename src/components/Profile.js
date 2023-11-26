import React from 'react';
import { Link } from 'react-router-dom';
import {logout,openProfilePage} from'../actions/authActionCreator';
import '../styles/profile.css'

//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

 function Profile(props){
  const {auth,dispatch}=props;

  const logoutFromDevice=()=>{
    dispatch(logout());
    dispatch(openProfilePage(false));
  }

  const handleClosePage=()=>{
    dispatch(openProfilePage(false));
  }

  return (
    <div className="Profile">
      <button className='closePageBtn' onClick={handleClosePage}>
          <img src={require('../assets/crossbtn.png')} alt='cut'/>
      </button>

      <div className='profile_pic_and_name'>
        <div className='rounded-img-container'>
           <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
        </div>
        <span className='name'>{auth.user.name}</span>
      </div>

      <div className='profile_item_container'>

        <Link to="/setting">
          <div className='profile_item'>
            <button className=''>Setting</button>
          </div>
        </Link>

        <div className='profile_item'>
          <button className='' onClick={logoutFromDevice}>Log out</button>
        </div>
      </div>
        
    </div>
  );
}

export default Profile;

// function mapStateToProps(state){
//   return{
//    auth:state.auth
//   }
// }
// const connectedProfileComponent=connect(mapStateToProps)(Profile);
// export default connectedProfileComponent;
