import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {

    const {setUser, loginUser,error, setError } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(userCredentials => {
                const currentuser = userCredentials.user;
                // setUser(currentuser);
                console.log(currentuser);
                form.reset();
                navigate('/')
            })
            .catch(err => {
                setError(err.message);
                console.log(error); 
        })
    }

    return (
        
            <div className="form-container">
               <h2 className="form-title">
                    Login
                </h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" required/>
                </div>
                <div><small className="error">{error}</small></div>
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