import "./signupuser.css";
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import header3 from "../../assests/header3.png";


const SignUp = () => {

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
        const { email, password, confirmPassword, FullName, Age, Profession } = user
        if (password == "" || confirmPassword == "" || email == "" || FullName == "" || Age == "" || Profession == "") {
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

        
        else if (!password.length >= 6 || !confirmPassword.length >= 6) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password Must be Greater then 6 Length")
        }

        try {
            setError("");
            setLoading(true);
           await SignUp(user.FirstName, user.LastName, user.Profession, user.email, user.Phone, user.WorkAddress, user.State, user.Age, user.password);
           navigate("/");
        } catch (error) {
    
    setError("Failed to create an account");
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
                <h2 className="formTitle">Sign-Up as User</h2>
                <div className="inputfield">
                    First Name
                    <input type="text" value={user.FirstName} name='FirstName' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    Last Name
                    <input type="text" value={user.LastName} name='LastName' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    Email
                    <input type="text" value={user.email} name='email' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    Phone
                    <input type="text" value={user.Phone} name='Phone' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    wAddress
                    <input type="text" value={user.WorkAddress} name='Address' onChange={UserHandler} />
                </div> 
                <div  className="inputfield">
                    State
                    <input type="text" value={user.State} name='State' onChange={UserHandler} />
</div>
                <div className="formSection">
                    <div>
                    Password
                    <input type="password" value={user.password} name='password' onChange={UserHandler} />
                    </div>
                    <div>
                    Confirm Password
                    <input type="password" value={user.confirmPassword} name='confirmPassword' onChange={UserHandler} />
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
