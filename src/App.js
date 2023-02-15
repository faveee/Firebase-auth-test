import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import  UpdateProfile from "./components/UpdateProfile";
import GeoLocation from "./Geolocation";


  function App() {
   return (
      <div>
    
        <AuthProvider>
<Router>
<GeoLocation />
<Routes>
   <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
   <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/login" element={<Login />} />
   <Route path="/forgot-password" element={<ForgotPassword />} />
</Routes>
</Router>
 </AuthProvider>


 </div>
  );
  }

  export default App;
