import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [user, setUser] = useState({
        FullName: "",
        Age: "",
        Profession: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const { error, SignUp, googleLogin, currentuser } = useAuth()
    const [err, setError] = useState("")
    const [backError, setBackError] = useState("")
    const [loading, setLoading] = useState(false);
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
           await SignUp(user.FullName, user.Age, user.Profession, user.email, user.password);
           navigate("/");
        } catch (error) {
    
    setError("Failed to create an account");
        }
        
    setLoading(false);
    }
    

    async function googleHandle() {
        try{
            await googleLogin();
        
        } catch (error) {
            setError("Failed to create an account");
        }
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
            <form onSubmit={SubmitHandler} className="form">
                <h2>Registration Form</h2>
                <div className="inputfield">
                    <input type="text" placeholder="UserName" value={user.FullName} name='FullName' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="text" placeholder="Age" value={user.Age} name='Age' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="text" placeholder="Profession" value={user.Profession} name='Profession' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="text" placeholder="Email" value={user.email} name='email' onChange={UserHandler} />
                </div>

                <div className="inputfield">
                    <input type="password" placeholder="Password" value={user.password} name='password' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="password" placeholder="Confirm Password" value={user.confirmPassword} name='confirmPassword' onChange={UserHandler} />
                </div>
                <button disabled={loading} type='submit'>Register</button>
            </form>
            <div onClick={googleHandle}>Google</div>
        <div>
        Already have an account? <Link to="/login">Login</Link>
       </div>
       </div>
    )
}

export default SignUp
