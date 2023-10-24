import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import PrivateRoute from "../shared/PrivateRoute";
import BrandProducts from "../components/BrandProducts";
import Detail from "../pages/Detail";
import UpdateProduct from "../pages/UpdateProduct";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          
        },
        {
          path: "/brandProducts/:brand",
          element: <BrandProducts></BrandProducts>,
          
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><Detail></Detail></PrivateRoute>,
          loader: ()=>fetch('https://brand-shop-server-bl488qyui-shamima-shimus-projects.vercel.app/products')
        },
        {
          path: "/updateProduct/:id",
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader: ({params})=>fetch(`https://brand-shop-server-bl488qyui-shamima-shimus-projects.vercel.app/products/${params.id}`)
        }
      ]
    },
  ]);

export default router;