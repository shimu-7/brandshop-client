import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../components/Footer";


const Login = () => {
    const [logError, setLogError] = useState(null)

    const { googleSignIn, logIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'User Logged in successfully',
                    
                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1000);

            })
            .catch(error => {
                setLogError(error.message);
            })
    }


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setLogError(null)

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'User logged in successfully',
                    
                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1000);
            })
            .catch(error =>{
                setLogError(error.message);
            })
    }
    return (
        <div className="max-w-6xl mx-auto">
            {/* <h2 className="3xl">this is Log in page</h2> */}
            <Navbar></Navbar>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-8">

                        <h1 className="text-4xl font-bold text-center my-5">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>New here!!! Please <Link to="/register" className="text-red-600">Register</Link> <span className="font-bold">or</span> </p>

                            <button onClick={handleGoogleLogIn} className="bg-slate-200 rounded-lg py-1"> <Link to="/">Continue with <span className="font-bold text-xl">Google</span></Link></button>

                            <div className="form-control mt-6">
                                <button className="btn bg-teal-200">Login</button>
                            </div>
                        </form>
                        {
                            logError && <p className="text-red-500 pl-2 pb-2">{logError}</p>
                        }

                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;