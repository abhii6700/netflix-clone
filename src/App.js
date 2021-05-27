import React, { useEffect } from 'react';
import './App.css';
import HomePage from './app/pages/homepage';
import {Switch, Route} from 'react-router-dom'
import Login from './app/pages/login_page';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './app/pages/profile';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
   const unsubscribe =auth.onAuthStateChanged(userAuth => {
    if(userAuth){
      //LOGGED IN
      dispatch(
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      )
    }else{
      //LOGGED OUT
      dispatch(
        logout()
      )
    }
   });
   return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
     <Switch> {!user ? <Route path='/login' component={Login}/> : 
     <>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={Profile} />
      </>
    }
    </Switch>
      
    </div>
  );
}

export default App;
