import Signupasartisan from "./Pages/SignUpAsArtisan/Signupasartisan";
import Signupuser from "./Pages/SignUpUser/Signupuser";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from './components/Navbar';
import SignIn from "./Pages/SignIn/Signin";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import  UpdateProfile from "./components/UpdateProfile";


  function App() {
   return (
      <div>
    
        <AuthProvider>
<Router>
<Navbar/>
<Routes>
   <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
   <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
   <Route path="/signin" element={<SignIn />} />
   <Route path="/Signupasartisan" element={<Signupasartisan />} />
   <Route path="/Signupuser" element={<Signupuser />} />
   <Route path="/forgot-password" element={<ForgotPassword />} />
</Routes>
</Router>
 </AuthProvider>


 </div>
  );
  }

  export default App;
