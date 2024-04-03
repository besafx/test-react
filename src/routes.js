import * as React from "react";
import { Login, Forbidden, Home, Page1, Page2 } from "./screens";
import {AutorizedRoute} from './AutorizedRoute';

export const routes = [
    {
        path: "login",
        element: <Login />
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "forbidden",
        element: <Forbidden />
    },
    {
        path: "",
        element: <Home />
    },
    {
        path: "page1",
        element: <AutorizedRoute component={<Page1/>} roles={['ADMIN', 'USER']} />
    },
    {
        path: "page2",
        element: <AutorizedRoute component={<Page2/>} roles={['USER']} />
    }
];