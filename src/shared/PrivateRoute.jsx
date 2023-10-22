import { useContext } from "react";
import PropTypes from 'prop-types'; 
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    //console.log(location);

    if(isLoading){
        return <div className=" min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-6xl text-center"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.state} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;