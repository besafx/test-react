import * as React from "react";
import { Navigate, Route, useLocation, useResolvedPath } from 'react-router-dom';

export const AutorizedRoute = ({ component, roles }) => {

    let location = useLocation();
    let resolvedLocation = useResolvedPath(location);

    // Getting user and his role from storage 
    const userRole = 'ADMIN';

    console.info(userRole);
    console.info(roles);
    console.info(roles.includes(userRole));

    if (!roles.includes(userRole)) {
        return <Navigate to="/login" state={{ path: resolvedLocation }} />;
    }

    return (
        <React.Fragment>
            {component}
        </React.Fragment>
    );

};