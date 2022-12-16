import React, { Children, createContext, useEffect, useState } from 'react';
import { app } from '../Authentication/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const UserContext = ({ children }) => {
    const [user, setUser] = useState({ });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const signGoogle = () => {
        setLoading(true);  
        return signInWithPopup(auth, googleProvider);
    }
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[])

    const authInfo = { auth, user, setUser, signUpUser, loginUser,error, setError,logoutUser, loading, signGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;