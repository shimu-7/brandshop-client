
import { Outlet } from "react-router-dom";

//className="max-w-6xl mx-auto "

const Root = () => {
   
    return (

        <div  >
            <div className="bg-slate-50">
                
                <div >
                    <Outlet></Outlet>
                </div>
            </div>
        </div>


    );
};

export default Root;