import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(" pk_test_51MrKPWSBNqN8QTevJgpNbOe55CjuwNyV5nqTJHqO8l8WqmmvXCD7b8SeCUMAgkA0MLx5qq5V6Rt6yNxYZmWb79uz00qmNxop0U");

function App() {

  const[{},dispatch]=useStateValue()
  useEffect(()=>{
   auth.onAuthStateChanged(authUser =>{
    console.log("The user is>>>",authUser);
    if(authUser){
      //user logged in/was logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
      dispatch({
        type:'SET_USER',
        user:null
      })
      //user logged out
    }
   })
  },[])
  return (
   <Router>
    <div className="App">
      <Routes>
        
        
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/checkout" element={[<Header />,<Checkout/>]}/>
        <Route path='/payment' element={[<Header />,<Elements stripe={promise}><Payment/></Elements>,]}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
