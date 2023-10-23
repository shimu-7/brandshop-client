import { useContext } from "react";
import PropTypes from 'prop-types'; 
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    //console.log(location);
    //console.log(loading);

    if(loading){
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