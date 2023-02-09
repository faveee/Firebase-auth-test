import React, { useContext, useEffect, useState } from 'react'
import { auth, signInWithGoogle } from '../firebase';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail as updateEmailFirebase, updatePassword as updatePasswordFirebase } from 'firebase/auth';


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export  function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

function signup(email, password) {
return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth);
    }

    function resetPassword(email) {
return sendPasswordResetEmail(auth, email);
    }

    function updateEmail(email) {
      return updateEmailFirebase(auth, currentUser, email);
          }

          function updatePassword(password) {
            return updatePasswordFirebase(currentUser, password);
                }
                function googleLogin() {
                  return signInWithGoogle(auth);
                }

useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
        })
        
        return unsubscribe
}, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        googleLogin
    };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
