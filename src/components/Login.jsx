import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, googleLogin } = useAuth();
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

async function googleHandle() {
  try{
      await googleLogin();
      navigate("/");
  } catch (error) {
      setError("Failed to create an account");
  }
}


   
  return (
    <>
    <div>
    <h2>Login</h2>
    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
<label>
    Email
    <input placeholder='email' type='email' ref={emailRef} required />
</label>
<label>
    Password
    <input placeholder='password' type='password' ref={passwordRef} required />
</label>
<button disabled={loading} type='submit'>Login</button>
        </form>
        <div onClick={googleHandle}>login with Google</div>
<div>
Need an account? <Link to="/signup">Register</Link>
    </div>
    <div>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    </div>
    </>
  );
  }
