import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const userRole = localStorage.getItem('role');
    
    if (!userRole) {
        return <Navigate to="/page" />;
    }
    
    if (role && userRole !== role) {
        return <Navigate to="/page" />;
    }
    
    return children;
};

export default ProtectedRoute;