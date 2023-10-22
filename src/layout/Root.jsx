import { Outlet } from "react-router-dom";


const Root = () => {
    return (

        <div className="bg-slate-50">
            <div className="max-w-6xl mx-auto ">
                <Outlet></Outlet>
            </div>
        </div>


    );
};

export default Root;