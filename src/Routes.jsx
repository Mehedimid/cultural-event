import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewDetails from "./components/ViewDetails";
import Offer from "./pages/Offer";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./privateRouter/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('/data.json')
        },
        {
          path:'/offer',
          element:<PrivateRoute><Offer></Offer></PrivateRoute>
        },
        {
          path:'/blog',
          element:<PrivateRoute><Blog></Blog></PrivateRoute>,
          loader:()=>fetch('/blog.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:() => fetch('/data.json')
        }
      ]
    },

  ]);

  export default router;