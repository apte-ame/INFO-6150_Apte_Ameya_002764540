import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from "react-router-dom";
import './Login.css';
const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const [signedIn, setSignedIn] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault();
        console.log(user)
        axios.post("http://localhost:3000/user/login", user)
            .then(res => {
                alert(res.data.message)
                if (res.data.message === "login success") {
                    navigate('/homepage')
                }
                console.log(res.data.user)
                setLoginUser(res.data.user)
                setSignedIn(!signedIn)
            })

    }
    // if(signedIn){
    //     return 
    // }
    return (
        <>

            <div class="global-container">
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Login</h3>
                        <div class="card-text">
                            <form>
                                <div class="form-group">
                                    <label for="sign-in-email">Email address</label>
                                    <input type="email" class="form-control form-control-sm" id="sign-in-email" aria-describedby="emailHelp" value={user.email} onChange={handleChange} name="email" />
                                </div>
                                <div class="form-group">
                                    <label for="sign-in-password">Password</label>
                                    <input type="password" class="form-control form-control-sm" id="sign-in-password" value={user.password} onChange={handleChange} name="password" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block" onClick={login}>Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login