import './App.css';
import React from 'react'
import { Login } from './Components/Login'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Profile } from './Components/Profile'
import { useState,useEffect } from 'react'
import fire from './fire'
import 'firebase/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [user, setUser] = useState('') ;
  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('') ;
  const [emailErr, setEmailErr] = useState('') ;
  const [passErr, setPassErr] = useState('') ;
  const [hasAccount, setHasAccount] = useState(false) ;

  const  clearInput = () =>{
    setEmail('') ;
    setPassword('') ;
  } ;

  const  clearErr = () =>{
    setEmailErr('') ;
    setPassErr('') ;
  } ;

  const handleLogin = (e) => {
    e.preventDefault();
    clearErr() ;
    fire
      .auth() 
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(err.message);
            break ;
          case "auth/wrong-password":
            setPassErr(err.message);
            break ;
        }
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    clearErr() ;
    fire
      .auth() 
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(err.message);
            break ;
          case "auth/weak-password":
            setPassErr(err.message);
            break ;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut() ;
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        clearInput() ;
        setUser(user);
      }
      else{
        setUser("");
      }
    });
  };

  useEffect(() => {
     authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <Router>
          <Profile email={email} handleLogout={handleLogout} />
          <Switch>
            <Route exact path="/Home" render={()=>{
                return(
                  <Home />
                )
              }}>
              </Route>
              <Route exact path="/About">
                  <About />
              </Route>
          </Switch>
        </Router>

        ) : (  
        <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailErr={emailErr}
          passErr={passErr}
        /> 
      )}
    </div>
  );
}

export default App;
