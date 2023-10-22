import { useContext } from "react";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div className={`${darkMode ? "dark" : "light"}`}>
            {/* <h2 className="3xl">this is home page</h2> */}
            
            <Navbar></Navbar>

            
            
        </div>
    );
};

export default Home;