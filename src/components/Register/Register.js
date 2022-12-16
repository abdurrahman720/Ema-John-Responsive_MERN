import React, { useContext, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const {signUpUser,error, setError,signGoogle} = useContext(AuthContext)
    const navigate = useNavigate();

    const googleSignIn = () => {
        signGoogle()
            .then(userCredentials => {
                const currentuser = userCredentials.user;
                console.log(currentuser);
            })
            .catch(err => {
                console.log(err);
                setError(err.message)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setError('');
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.lenght < 6) {
            setError("Password should be at least 6 characters");
            return;
        }
        if (password !== confirm) {
            setError("Your password is didn't match");
            return
        }
        signUpUser(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user);
                form.reset();
                navigate('/login');
                
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
        })

    }


    return (
        <div className="form-container">
        <h2 className="form-title">
             Sign Up
         </h2>
     <form onSubmit={handleSubmit}> 
         <div className="form-control">
             <label htmlFor="email">Email</label>
             <input type="email" name="email" placeholder="Email" required/>
         </div>
         <div className="form-control">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" placeholder="password" required/>
             <label htmlFor="confirm">Confirm Password</label>
             <input type="password" name="confirm" placeholder="confirm password" required/>
                </div>
                <div><small className="error">{error}</small></div>
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
                    <button onClick={googleSignIn} className="google-btn">
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