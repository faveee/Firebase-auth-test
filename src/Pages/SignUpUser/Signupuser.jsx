import "./signupuser.css";
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import header3 from "../../assests/header3.png";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SignUp = () => {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    const { error, SignUp, currentuser } = useAuth()
    const [err, setError] = useState("")
    const [backError, setBackError] = useState("")
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        FirstName: "",
        LastName: "",
        Profession: "",
        email: "",
        Phone: "",
        WorkAddress: "",
        State: "",
        Age: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("i am in")
        if (error) {
            setInterval(() => {
                setBackError("")
            }, 5000)
            setBackError(error)
        }
    }, [error, currentuser])
    const UserHandler = (e) => {
        const { name, value } = e.target;
        console.log(name +"::::::::::"+value)
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const SubmitHandler = async (e) => {
        e.preventDefault()
        const {email, password, confirmPassword, FirstName, LastName, Profession, Phone, WorkAddress, State, Age } = user
        if (password === "" || confirmPassword === "" || email === "" || FirstName === "" || LastName === "" || Profession === "" || Phone === "" || WorkAddress === "" || State === "" || Age === "") {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Please fill all the fields ")
        }
        else if (password !== confirmPassword) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password do not match")
        }
        else if (password.length < 6 || confirmPassword.length < 6) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password must be at least 6 characters long")
        }
        else {
            try {
                setError("");
                setLoading(true);
                await SignUp(FirstName, LastName, Profession, email, Phone, WorkAddress, State, Age, password);
                currentuser && setUser({
                    FirstName: "",
                    LastName: "",
                    Profession: "",
                    email: "",
                    Phone: "",
                    WorkAddress: "",
                    State: "",
                    Age: "",
                    password: "",
                    confirmPassword: ""
                });
                navigate("/dashboard");
            } catch (error) {
                setError("Failed to create an account");
            }
        }
        setLoading(false);
    }

    return (
        <div className='box'>
            {
                err ? (
                    err && <p className='error'>{err}</p>
                ) : (
                    backError && <p className='error'>{backError}</p>
                )
            }
            <div>
           <img src={header3} alt="SignUpHeader" className="signup-header" />
            </div>
            <form onSubmit={SubmitHandler} className="form">
                <h2 className="formTitle">Sign-Up as an User</h2>
                <div className="inputfield">
                    First Name
                    <input type="text" value={user.FirstName} name='FirstName' onChange={UserHandler} required/>
                </div>
                <div className="inputfield">
                    Last Name
                    <input type="text" value={user.LastName} name='LastName' onChange={UserHandler} required/>
                </div>
                <div className="inputfield">
                    Profession
                    <input type="text" value={user.Profession} name='Profession' onChange={UserHandler} required/>
                </div>
                <div className="inputfield">
                    Email
                    <input type="text" value={user.email} name='email' onChange={UserHandler} required/>
                </div>
                <div className="inputfield">
                    Phone
                    <input type="text" value={user.Phone} name='Phone' onChange={UserHandler} required/>
                </div>
                <div className="inputfield">
                    Work Address
                    <input type="text" value={user.WorkAddress} name='WorkAddress' onChange={UserHandler} required/>
                </div> 
                <div className="formSection">
                <div  className="inputfield">
                    State
                    <input type="text" value={user.State} name='State' onChange={UserHandler} required/>
</div>
<div  className="inputfield">
                    Age
                    <input type="text" value={user.Age} name='Age' onChange={UserHandler} required/>
                    </div>
                    </div>
                    <div className="formSection">
                    <div>
                    Password
                    <input type="password" value={user.password} name='password' onChange={UserHandler} required/>
                    <div className="toggle">
                 { passwordType==="password"? <VisibilityOffOutlinedIcon  onClick={togglePassword} /> :<RemoveRedEyeOutlinedIcon onClick={togglePassword}/> }
                </div>
                    </div>
                    <div>
                    Confirm Password
                    <input type="password" value={user.confirmPassword} name='confirmPassword' onChange={UserHandler} required/>                    
                    <div className="toggle">
                 { passwordType==="password"? <VisibilityOffOutlinedIcon  onClick={togglePassword} /> :<RemoveRedEyeOutlinedIcon onClick={togglePassword}/> }
                </div>
                    </div>
                </div>
                <div className="bottom">
                <input type="checkbox" id="opt" />
<span id="opt">By creating an account you agree to our<a href="www.google.com" alt="Terms and Condition">Terms of Service</a></span>
                </div>
                <div className="btn-ctn">
                <button disabled={loading} type='submit'>Create Account</button>
                </div>
                <div className="footerBtm">
        Already have an account? <Link to="/signin">Log In</Link>
       </div>
            </form>
       </div>
    )

}

export default SignUp