import React, { useRef, useState } from 'react'
import "./signin.css";
import header from "../../assests/header.png";
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();

    try {
        setError("");
        setLoading(true);
       await login(emailRef.current.value, passwordRef.current.value);
       navigate("/");
    } catch {

setError("Failed to Login");
    }
    
setLoading(false);
}


   
  return (
    <>
    <div className='container'>
    <div>
        <img src={header} alt="header" className="headercontainer"/>
    </div>
    <div className="formcontainer">
    <h2 className="formheader">Sign-In</h2>
        <form onSubmit={handleSubmit}>
<label>
    Email/Phone
    <input type='email' className="field" ref={emailRef} required />
</label>
<label>
    Password
    <input type='password' className="field" ref={passwordRef} required />
</label>
<div className="btm-conditions">
<span className="left-btm">
<input type="checkbox"  id="opt-in"/><label for="opt-in">Remember me</label>
</span>
<div className="right-btm">
<Link to="/forgot-password">Forgot Password?</Link>
</div>
</div>
<button disabled={loading} type='submit'>Log in</button>
<div className="form-footer">
Don't have an account? <Link to="/signup" className={'footer'}>Sign-Up</Link>
    </div>
        </form>    
    </div>
    </div>
    </>
  );
  }
