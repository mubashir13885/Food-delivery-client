import {createBrowserRouter,} from "react-router-dom";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import Cartpage from "../pages/user/Cartpage";
import Productpage from "../pages/user/Productpage";
import Profilepage from "../pages/user/Profilepage";
import Restaurant from "../pages/user/Restaurant";
import Restodetails from "../pages/user/Restodetails";
import Paymentsuccess from "../pages/user/Paymentsuccess";
import Paymentcancel from "../pages/user/Paymentcancel";
import List from "../pages/Admin/List";
import Order from "../pages/Admin/Order";
import Add from "../pages/Admin/Add";
import HomePage from "../pages/user/HomePage";
import UserLayout from "../layout/UserLayout"
import Admindashboard from "../pages/Admin/Admindashboard";
import AddRestaurant from "../pages/Admin/AddRes";
import RestaurantList from "../pages/Admin/Restaurants";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<UserLayout/>,
      errorElement: <h1> Error Page </h1>,
      children:[
        {
            path:"",
            element: <HomePage/>
        },
        {
            path:"login",
            element: <Login/>
        },
        {
            path:"signup",
            element: <Signup/>
        },
        {
            path:"cart",
            element: <Cartpage/>
        },
        {
            path:"products",
            element: <Productpage/>
        },
        {
            path:"profile",
            element: <Profilepage/>
        },
        {
            path:"restaurant",
            element: <Restaurant/>
        },
        {
            path:"restodetails/:id",
            element: <Restodetails />
        },
        {
            path:"/payment/success",
            element: <Paymentsuccess/>
        },
        {
            path:"/payment/failed",
            element: <Paymentcancel/>
        }
      ]
    },
     {
        path: "/admin",
        element:<UserLayout/>,
        children: [{
            path: "login",
            element: <Login role="admin" />
        }, 
        {
            path: "dashboard",
            element: <Admindashboard/>
        },
        {
            path: "add",
            element: <Add/>
        },
        {
            path: "list",
            element: <List />
        },
        {
            path: "order",
            element: <Order/>
        },
        {
            path: "add-restaurant",
            element: <AddRestaurant/>
        },
        {
            path: "restaurants",
            element: <RestaurantList/>
        }
      ]
    }

  ]);