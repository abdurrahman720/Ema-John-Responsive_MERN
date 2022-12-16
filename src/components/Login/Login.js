import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        
            <div className="form-container">
               <h2 className="form-title">
                    Login
                </h2>
            <form action="" >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" required/>
                </div>
                <div className="btn-container">
                <input className="btn-submit" type="submit" value="Login" />
                </div>
            </form>
            <p> <small>New to Ema John? <Link className="link" to="/register">Create new account</Link></small> </p>
            <div className="googleSign">
                <div className="line-break">
                    <div className="line-one"></div>
                    <div className="or"><small>or</small></div>
                    <div className="line-one"></div>
                </div>
                <div className="google-btn-container">
                    <button className="google-btn">
                        <>
                        <FcGoogle></FcGoogle>
                        <span>Continue with Google</span>
                        </>
                    </button>
                </div>
            </div>
            </div>
        
        
    );
};

export default Login;