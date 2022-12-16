import React, { Children, createContext, useEffect, useState } from 'react';
import { app } from '../Authentication/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);



const UserContext = ({ children }) => {
    const [user, setUser] = useState({ });
    const [error, setError] = useState('');

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=> unSubscribe();
    },[])

    const authInfo = { auth, user, setUser, signUpUser, loginUser,error, setError,logoutUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;