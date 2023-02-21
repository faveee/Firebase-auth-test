import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            setMessage("");
            setError("");
            setLoading(true);
           await resetPassword(emailRef.current.value);
           setMessage("Catch your inbox for futher instructions");
          
        } catch {
    
    setError("Failed to reset password");
        }
        
    setLoading(false);
    }
    
    
       
      return (
        <>
        <div>
        <h2>Forgot Password</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
        {message && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{message}</div>}
            <form onSubmit={handleSubmit}>
    <label>
        Email
        <input placeholder='email' type='email' ref={emailRef} required />
    </label>
    <button disabled={loading} type='submit'>Reset Password</button>
            </form>
        <div>
          Need an account?<Link to="/signup">Register</Link>
        </div>
        </div>
        </>
      );
      }
    
