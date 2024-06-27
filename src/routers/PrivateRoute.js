// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => !!state.auth.uid);

    return isAuthenticated ? (
    <div>
    <Header />
    {children}
    </div> 
    ) : <Navigate to="/" />;
};

export default PrivateRoute;
