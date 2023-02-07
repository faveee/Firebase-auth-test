import { useState } from 'react';
import './App.css';
import { signInWithGoogle } from "./firebase";
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from './firebase-config'

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
try {
    const user = await createUserWithEmailAndPassword();
    console.log(user)
} catch (error) {
  console.log(error.message);
}

  };

  const login = async () => {

  }
  const logout = async () => {

  }
  return (
    <div className="App">
      <div>
        <h2>Regiser User</h2>
        <input placeholder="email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
        <input placeholder="password"  onChange={(event) => {setRegisterPassword(event.target.value)}}/>
        <button>Create user</button>
      </div>
      <div>
        <h2>Login</h2>
        <input placeholder="email"  onChange={(event) => {setLoginEmail(event.target.value)}} />
        <input placeholder="password"  onChange={(event) => {setLoginPassword(event.target.value)}}/>
        <button>login</button>
      </div>
      <div>
<button onClick={signInWithGoogle}>Sign In with Google</button>
<h1>{localStorage.getItem("name")}</h1>
</div>
</div>
    )
}

export default App;
