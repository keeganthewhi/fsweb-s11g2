import './App.css';
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './api/Login';
import Friendslist from './api/FriendsList';
import { useHistory } from 'react-router-dom'
import Logout from './api/Logout';
import AuthContextProvider from './context/AuthContext ';
function App() {
  const history=useHistory();
  const [htr,setHtr]=useState(window.location.href);

  const goToLogin=()=>{
    history.push('/login') 
    setHtr("");  
}
  return (
    <AuthContextProvider>

    <div>
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      {htr=='http://localhost:3000/' ? <button onClick={goToLogin}>LOGIN</button>: ""}
    </div>
     <Switch>
     <Route exact path="/login">
       <Login />
     </Route>
     <Route exact path="/friends">
       <Friendslist />
     </Route>
     <Route exact path="/logout">
       <Logout />
     </Route>
     </Switch>
     </div>
     </AuthContextProvider>

  );
}

export default App;
