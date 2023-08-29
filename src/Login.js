import { Link,useNavigate } from 'react-router-dom'
import React from 'react'
import './Login.css'
import { useState } from 'react'
import { auth } from "./firebase"


function Login() {
  const navigate = useNavigate ();
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const signin = e =>{ 
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then(auth=>{
        navigate("/",{replace:true})
      })
      .catch(error=>alert(error.message))
  }
  const register = e =>{
    e.preventDefault()
    //fancy furebase shir
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //user created
      console.log(auth)
      if(auth){
        navigate("/",{replace:true})
      }
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
        <Link to="/">
        <img src="lg1.png" alt="" className="login_logo" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setemail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                <button type='submit' onClick={signin} className='login_signin'>Sign-In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON CLONE 
                conditions of use and sale.Please see our
                Privacy Notice,our Cookies Notice and our Internet Based Ads Notice
            </p>
            <button onClick={register} className='login_register'>Create Your Amazon Account</button>
        </div>
    </div>
    
    
  )
}

export default Login