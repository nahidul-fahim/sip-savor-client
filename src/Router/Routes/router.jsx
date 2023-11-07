import { createBrowserRouter } from 'react-router-dom';
import Root from '../../LayOut/Root/Root';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import SignUp from '../../Auth/SignUp/SignUp';
import Login from '../../Auth/Login/Login';
import Shop from '../../Pages/Shop/Shop';
import SingleProductDetails from '../../Pages/SingleProductDetails/SingleProductDetails';
import PurchasePage from '../../Pages/PurchasePage/PurchasePage';

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
        element: <Shop />
      },
      {
        path: "/shop/:id",
        element: <SingleProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/allfoods/${params.id}`)
      },
      {
        path: "/purchase/:id",
        element: <PurchasePage />,
        loader: ({ params }) => fetch(`http://localhost:5000/allfoods/${params.id}`)
      }
    ]
  },
]);

export default router;