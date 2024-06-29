import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";
import Home from "../components/Home";
import Cart from "../components/Cart";
import AddProduct from "../components/AddProduct"

import Login from "../components/Login";
import Register from "../components/Register";

import ErrorPage from "../components/ErrorPage";

import PrivateRoute from "../routes/PrivateRoute";
import Product from "../components/Product";
import SingleProduct from "../components/SingleProduct";
import EditProduct from "../components/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('https://shopy-server-rho.vercel.app/brand')
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute> ,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> ,
      },
      {
        path: "/singleProduct/:productId",
        element:<PrivateRoute><SingleProduct></SingleProduct></PrivateRoute> , 
        loader:({params})=>fetch(`https://shopy-server-rho.vercel.app/singleProduct/${params.productId}`)
      },
      {
        path: "/editProduct/:id",
        element:<EditProduct></EditProduct>, 
        loader:({params})=>fetch(`https://shopy-server-rho.vercel.app/singleProduct/${params.id}`)
      },
      {
        path: "/product/:brandName",
        element:  <Product></Product>, 
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
])

export default router;