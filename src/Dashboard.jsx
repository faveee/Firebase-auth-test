import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function Dashboard() {
const { currentuser, logout } = useAuth();
const [error, setError] = useState("");
const navigate = useNavigate();

async function handleLogout() {
setError("");

try {
    await logout();
    navigate("/signin");
} catch {
    setError("Failed to log out");
}
}

  return (
    <div>
        <div>
            <h2>Profile</h2>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
            <strong>Email:</strong> {currentuser?.email}
            <br />
            <strong>Display Name:</strong> {currentuser?.FullName}
            <br />
            <Link to="/update-profile">Update Profile</Link>
        </div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
