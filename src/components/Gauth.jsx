import React from "react";
import { signInWithGoogle } from "../firebase";
 function Gauth() {


  return (

       <div>
 <button onClick={signInWithGoogle}>Sign In with Google</button>
 <h1>{localStorage.getItem("name")}</h1>
 
 </div>
 )
 }

 export default Gauth;
