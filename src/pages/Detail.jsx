import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar";

const Detail = () => {
    const {id} = useParams();
    const products = useLoaderData();
    const product = products.find(product=>product._id==id);
    const { pName, bName, photo, type, price,  description } = product;
    console.log(id);
    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <Navbar></Navbar>
            <h2 className="3xl">this is detail page</h2>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {pName}
                        <div className="badge text-white badge-error">{bName}</div>
                    </h2>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                    <p>{description}</p>
                   
                    
                    <div className="card-actions flex justify-center mt-3 w-full">
                        <Link className='w-full' to={`/brandProducts/${product.bName}`}><button  className="badge badge-success w-full ">Go Back</button></Link>
                        <Link className='w-full'><button className="badge  badge-accent w-full">Add To Cart</button></Link>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Detail;