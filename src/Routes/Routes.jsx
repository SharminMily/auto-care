import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Product from "../pages/Product/Product";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>                
            },
            {
                path: '/product',
                element: <Product></Product>,
                loader: () => fetch('./car.json')            
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: "privateRoute",
                element: <PrivateRoute></PrivateRoute>
            },

        ]
    },
]);
export default router;