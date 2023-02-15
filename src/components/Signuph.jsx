// import React, { useRef, useState } from 'react'
// import { useAuth } from '../contexts/AuthContext';
// import { Link, useNavigate } from "react-router-dom";

// export default function Signup() {

//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();
//     const { signup, googleLogin, currentuser } = useAuth();
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [user, setUser] = useState({
//         FirstName: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//       })
//     const navigate = useNavigate();


// async function handleSubmit(e) {
//     e.preventDefault();

//     const { email, password, passwordConfirm, Firstname} = user
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//         return setError("Passwords do not match");
//     }

//     try {
//         setError("");
//         setLoading(true);
//        await signup(emailRef.current.value, passwordRef.current.value);
//        navigate("/");
//     } catch (error) {

// setError("Failed to create an account");
//     }
    
// setLoading(false);
// }
 
// async function googleHandle() {
//     try{
//         await googleLogin();
//         navigate("/");
//     } catch (error) {
//         setError("Failed to create an account");
//     }
// }
   
//   return (
//     <>
//     <div>
//     <h2>Signup</h2>
// {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
//         <form onSubmit={handleSubmit}>
//         <label>
//        Name
//     <input placeholder='name' type='text' value={user.Firstname} required />
// </label>
//         <label>
//     Email
//     <input placeholder='email' type='email' ref={emailRef} required />
// </label>
// <label>
//     Password
//     <input placeholder='password' type='password' ref={passwordRef} required />
// </label>
// <label>
//     Password Confirmation
//     <input placeholder='password' type='password' ref={passwordConfirmRef} required />
// </label>
// <button disabled={loading} type='submit'>Register</button>
//         </form>
//    <div onClick={googleHandle}>Google</div>
    
// <div>
//      Already have an account? <Link to="/login">Login</Link>
//     </div>
//     </div>
//     </>
//   );
//   }
