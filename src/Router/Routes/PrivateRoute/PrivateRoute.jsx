import PropTypes from 'prop-types';
import useAuthenticate from '../../../Hooks/useAuthenticate/useAuthenticate';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

    const { currentUser, loading } = useAuthenticate();
    const location = useLocation();

    // Necessary images
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';


    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }

    if (currentUser) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}