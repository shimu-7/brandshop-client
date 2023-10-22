import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {

    const {user} = useContext(AuthContext)

    const links = <>
        <li className="mx-2"><NavLink to="/" >Home</NavLink></li>
        <li><NavLink >About</NavLink></li> 

    </>

    const logOut = () =>{

    }


    return (
        <div className="">
            <div className="navbar  rounded-md ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-red-600 normal-case text-xl">BrandWheelhouse</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex mx-2 text-red-400">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-[1px]">
                    <div>
                        {
                            user?.displayName ? <p className="font-medium">{user.displayName}</p> : " "
                        }
                    </div>

                    <div className="w-10 rounded-full">
                        {
                            user?.photoURL ? <img className="h-10 w-10 rounded-full" src={`${user.photoURL}`} referrerPolicy="no-referrer" ></img> : <CgProfile className="text-3xl"></CgProfile>
                        }
                    </div>
                    {
                        user ? <Link to="/"><button onClick={logOut} className="btn">Logout</button></Link> : <Link to="/login"> <button className="btn">Login</button></Link>

                    }
                 
                </div>
            </div>

        </div>
    );
};

export default Navbar;