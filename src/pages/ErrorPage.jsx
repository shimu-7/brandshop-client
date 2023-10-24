import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Oops!</h1>
                    <p className="text-lg">Sorry, an unexpected error has occurred.</p>
                    

                    <button className="btn-success p-2 rounded-lg my-5"><Link to="/">Go Back</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;