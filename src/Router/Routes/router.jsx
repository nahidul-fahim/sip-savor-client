import { createBrowserRouter } from 'react-router-dom';
import Root from '../../LayOut/Root/Root';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import SignUp from '../../Auth/SignUp/SignUp';
import Login from '../../Auth/Login/Login';
import Shop from '../../Pages/Shop/Shop';
import SingleProductDetails from '../../Pages/SingleProductDetails/SingleProductDetails';
import PurchasePage from '../../Pages/PurchasePage/PurchasePage';
import Blog from '../../Pages/Blog/Blog';
import MyAddition from '../../User Profile/My Addition/MyAddition';
import UpdateProduct from '../../User Profile/My Addition/UpdateProduct';
import AddNewProduct from '../../User Profile/AddNewProduct/AddNewProduct';
import MyPurchase from '../../User Profile/My Purchase/MyPurchase';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch('http://localhost:5000/totalfoods')
      },
      {
        path: "/shop/:id",
        element: <SingleProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/allfoods/${params.id}`)
      },
      {
        path: "/purchase/:id",
        element: <PrivateRoute><PurchasePage /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allfoods/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myaddition",
        element: <PrivateRoute><MyAddition /></PrivateRoute>
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allfoods/${params.id}`)
      },
      {
        path: "/addnewproduct",
        element: <PrivateRoute><AddNewProduct /></PrivateRoute>
      },
      {
        path: "/mypurchase",
        element: <PrivateRoute><MyPurchase /></PrivateRoute>
      }
    ]
  },
]);

export default router;