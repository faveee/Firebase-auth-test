import { signInWithGoogle } from "./Firebase/app";

export default function() {
    return(
<div>
<button onClick={signInWithGoogle}>hll</button>
<h1>{localStorage.getItem("name")}</h1>
</div>
    )
}
