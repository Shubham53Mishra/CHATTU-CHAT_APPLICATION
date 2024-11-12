import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  // If the user is not authenticated, redirect to the login page
  if (!user) return <Navigate to={redirect}  />;
  
  // Otherwise, render the child components
  return children;
}

export default ProtectRoute;
