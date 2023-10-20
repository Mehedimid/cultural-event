import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
   

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
       onAuthStateChanged(auth, user =>{
              setUser(user)
              console.log(user)
       })
    },[])

   const authInfo = {
    createUser, logInUser, logOut, user, 
   }

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
}

export default AuthProvider;