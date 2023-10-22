import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import PrivateRoute from "../shared/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addProduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: "/myCart",
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        }
      ]
    },
  ]);

export default router;