import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
    const { currentuser } = useAuth();

  return currentuser ? children : <Navigate to="/dashboard" />;

}

export default PrivateRoute;