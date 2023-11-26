import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import  Navbar  from './Navbar';
import Profile from './Profile';
import '../styles/app.css'
import { connect } from 'react-redux';

import { 
  Home, 
  Login, 
  Signup, 
  HealthTips,
  HealthIssues,
  Diseases,
  TodoList,
  Yoga,
  Foods,
  Entertainment,
  Friends,
  Games,
  Emergency} from '../pages/index';

function App(props){
  const {auth,dispatch}=props;

  const PrivateRoute = ({ children}) => {
    if (auth.user) {
        return children;
    }
    return <Navigate to="/users/login" />
  }

  const Page404=()=>{
    return <h1>404</h1>
  };

  return (
    <div className="App">
      <Navbar />
      {
        auth.isOpenProfilePage && <Profile auth={auth} dispatch={dispatch} />
      }
      <Routes>
        <Route path="/" element={ <PrivateRoute> <Home /> </PrivateRoute>}/>
        <Route path="/healthTips" element={ <PrivateRoute> <HealthTips /> </PrivateRoute> }/>
        <Route path="/healthIssues" element={ <PrivateRoute> <HealthIssues /> </PrivateRoute>}/>
        <Route path="/diseases" element={ <PrivateRoute> <Diseases /> </PrivateRoute>}/>
        <Route path="/todoList" element={ <PrivateRoute> <TodoList /> </PrivateRoute>}/>
        <Route path="/foods" element={ <PrivateRoute> <Foods /> </PrivateRoute>}/>
        <Route path="/yoga" element={ <PrivateRoute> <Yoga /> </PrivateRoute>}/>
        <Route path="/entertainment" element={ <PrivateRoute> <Entertainment /> </PrivateRoute>}/>
        <Route path="/friends" element={ <PrivateRoute> <Friends /> </PrivateRoute>}/>
        <Route path="/games" element={ <PrivateRoute> <Games /> </PrivateRoute>}/>
        <Route path="/emergency" element={ <PrivateRoute> <Emergency /> </PrivateRoute>}/>

        <Route exact path="/users/login" element={<Login auth={auth} dispatch={dispatch} />} />
        <Route exact path="/users/signup" element={<Signup auth={auth} dispatch={dispatch} />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );

}

//==============connect() to get/subscribe store/state================
function mapStateToProps(state){
  return{
   auth:state.auth
  }
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;