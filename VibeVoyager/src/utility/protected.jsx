import { Navigate, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is not authenticated, redirect to login page
  // Otherwise, render the child routes using Outlet
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Protected;
