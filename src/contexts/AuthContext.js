import React, { useContext, useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { AuthErrorCodes, onAuthStateChanged, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail as updateEmailFirebase, updatePassword as updatePasswordFirebase } from 'firebase/auth';


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export  function AuthProvider({ children }) {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [currentuser, setuser] = useState()
  // useEffect(
  //   () => {
  //     onAuthStateChanged(auth, user => {
  //       console.log(user)
  //       if (user) {
  //         setuser(user)
  //         console.log("u are logging")
  //       }
  //       else {
  //         // alert("u are logout")
  //       }
  //     })
  //   }, [currentuser]
  // )
  const SignUp = async (email, password, FirstName, LastName, Profession, Phone, WorkAddress, State, Age) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        console.log(result)
        try {
          const ref = doc(db, "artisian", result.user.uid)
          const docRef = await setDoc(ref, { FirstName, LastName, Profession, Phone, WorkAddress, State, Age })
          alert("Welcome new User create successfully")
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    ).catch(err => {
      if (err.code === "auth/email-already-in-use") {

        setInterval(() => {
          setError("")
        }, 5000)
        setError("email already in use try another email")
      }
      else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {

        setInterval(() => {
          setError("")
        }, 5000)
        setError("Password Must be 6 charecter")
      }

      else {
        setError(err.message)
      }
    })
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
      return updateEmailFirebase(auth, currentuser, email);
          }

          function updatePassword(password) {
            return updatePasswordFirebase(currentuser, password);
                }

useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setuser(user)
      setLoading(false)
        })
        
        return unsubscribe
}, [])

    const value = {
        currentuser,
        login,
        SignUp,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
