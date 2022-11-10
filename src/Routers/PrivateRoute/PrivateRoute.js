import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider);
    const location = useLocation();
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-yellow-400"></div>
    }
    if(!user){
        return <Navigate to="/login" state={{from : location}} replace></Navigate>
    }
    return children;
    
};

export default PrivateRoute;