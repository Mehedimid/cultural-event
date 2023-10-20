import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

function AuthProvider({children}) {
   

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

   const authInfo = {
    createUser, logInUser
   }

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
}

export default AuthProvider;