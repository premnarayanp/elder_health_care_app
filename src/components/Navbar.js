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
         <div className='menuItem'>
            <button className='menuButton'>Home</button>
          </div>
         </Link>

        <Link to="/healthTips">
          <div className='menuItem'>
            <button className='menuButton'>Health Tips</button>
           </div>
        </Link>

        <Link to="/healthIssues">
          <div className='menuItem'>
            <button className='menuButton'>Health Issues</button>
          </div>
        </Link>

        <Link to="/diseases">
          <div className='menuItem'>
            <button className='menuButton'>Diseases</button>
          </div>
        </Link>

        <Link to="/todoList">
          <div className='menuItem'>
            <button className='menuButton'>Todo List</button>
          </div>
        </Link>

        <Link to="/foods">
          <div className='menuItem'>
            <button className='menuButton'>Foods</button>
          </div>
        </Link>

        <Link to="/yoga">
          <div className='menuItem'>
           <button className='menuButton'>Yoga</button>
          </div>
        </Link>

        <Link to="/entertainment">
          <div className='menuItem'>
            <button className='menuButton'>Entertainment</button>
          </div> 
        </Link>

        <Link to="/friends">
         <div className='menuItem'>
           <button className='menuButton'>Friends</button>
          </div> 
        </Link>

        <Link to="/games">
         <div className='menuItem'>
           <button className='menuButton'>Games</button>
          </div>
        </Link>

        <Link to="/emergency">
         <div className='menuItem'>
            <button className='menuButton'>Emergency</button>
          </div>
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
