import { createBrowserRouter } from "react-router-dom";
import Admin from './components/Admin/Admin'
import Card from "./components/Card/Card";
import Login from "./components/Login";
import Users from "./components/Users/Users";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Users />
    },
    {
        path: '/card',
        element: <Card />,
    },
    {
        path: '/admin',
        element: <Admin />,
    },
    {
        path: '/login',
        element: <Login />,
    }
]);