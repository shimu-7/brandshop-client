
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

//className="max-w-6xl mx-auto "

const Root = () => {
   
    return (

        <div  >
            <div className="bg-slate-50">
                
                <div >
                    
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>


    );
};

export default Root;