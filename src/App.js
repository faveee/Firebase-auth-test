import { useState } from 'react';
import './App.css';
import { signInWithGoogle } from "./firebase";

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {

  }

  const login = async () => {

  }
  const logout = async () => {

  }
  return (
    <div className="App">
      <div>
        <h2>Regiser User</h2>
        <input placeholder='email' Email />
        <input placeholder='password' Password />
        <button>Create user</button>
      </div>
      <div>
        <h2>Login</h2>
        <input placeholder='email' Email />
        <input placeholder='password' Password />
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
