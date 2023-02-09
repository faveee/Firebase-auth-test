import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

if (emailRef.current.value !== currentUser.email){
    promises.push(updateEmail(emailRef.current.value));
}

if (passwordRef.current.value){
    promises.push(updatePassword(passwordRef.current.value));
}

Promise.all(promises)
.then(() => {
    navigate("/");
})
.catch (() => {
    setError("Failed to update account");
})
.finally(() =>{
    setLoading(false);
});
}
  return (
    <>
    <div>
    <h2>Update Profile</h2>
    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
<label>
    Email
    <input placeholder='email' type='email' ref={emailRef} required  defaultValue={currentUser.email}/>
</label>
<label>
    Password
    <input placeholder='leave blank to keep the same' type='password' ref={passwordRef} />
</label>
<label>
    Password Confirmation
    <input placeholder='leave blank to keep the same' type='password' ref={passwordConfirmRef} />
</label>
<button disabled={loading} type='submit'>update</button>
        </form>
<div>
<Link to="/">Cancel</Link>
    </div>
    <div>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    </div>
    </>
  );
  }
