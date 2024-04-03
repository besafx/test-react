import * as React from "react";
import { Navigate, Route, useLocation, useResolvedPath } from 'react-router-dom';

export const AutorizedRoute = ({ component, roles }) => {

    let location = useLocation();
    let resolvedLocation = useResolvedPath(location);

    // Check if user logged in 
    const user = { username: 'admin' };
    if (!user) {
        return <Navigate to="/login" state={{ path: resolvedLocation }} />;
    }

    // Getting user and his role from storage 
    const userRole = 'ADMIN';
    if (!roles.includes(userRole)) {
        return <Navigate to="/forbidden" />;
    }

    return (
        <React.Fragment>
            {component}
        </React.Fragment>
    );

};