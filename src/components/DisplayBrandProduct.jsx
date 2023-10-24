import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";


const DisplayBrandProduct = ({ product }) => {

    const { pName, bName, photo, type, price, rating } = product;
    const rate = parseInt(rating);
    const count = [1, 2, 3, 4, 5];
    //console.log(rate);
    const check = (id) => {
        if (rate == id) return "checked";
        else return ""
    }

    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-60' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {pName}
                        <div className="badge text-white badge-error">{bName}</div>
                    </h2>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                    
                    
                
                    <p className='flex gap-4'>Rating: <div className='flex justify-center items-center'>{rating}<AiFillStar></AiFillStar> </div> </p>
                   
                    <div className="card-actions flex justify-center mt-3 w-full">
                        <Link className='w-full' to={`/details/${product._id}`}><button className="badge badge-success w-full ">View Details</button></Link>
                        <Link to={`/updateProduct/${product._id}`} className='w-full'><button className="badge  badge-accent w-full">Update</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

DisplayBrandProduct.propTypes = {
    product: PropTypes.object
}

export default DisplayBrandProduct;