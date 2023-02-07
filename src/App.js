import './App.css';
import { signInWithGoogle } from "./Firebase";

function App() {
  return (
    <div className="App">
<button onClick={signInWithGoogle}>hll</button>
<h1>{localStorage.getItem("name")}</h1>
</div>
    )
}

export default App;
