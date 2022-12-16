import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div className="form-container">
        <h2 className="form-title">
             Sign Up
         </h2>
     <form action="" className="" >
         <div className="form-control">
             <label htmlFor="email">Email</label>
             <input type="email" name="email" placeholder="Email" required/>
         </div>
         <div className="form-control">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" placeholder="password" required/>
             <label htmlFor="confirm">Confirm Password</label>
             <input type="password" name="name" placeholder="confirm password" required/>
         </div>
         <div className="btn-container">
                <input className="btn-submit" type="submit" value="SignUp" />
                </div>
     </form>
            <p> <small>Already Have an Account? <Link className="link" to="/login">Login</Link></small> </p>
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

export default Register;