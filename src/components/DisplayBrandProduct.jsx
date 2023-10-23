import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DisplayBrandProduct = ({ product }) => {

    const { pName, bName, photo, type, price, rating } = product;
    const rate = parseInt(rating);
    const count = [1,2,3,4,5];
    //console.log(rate);
    const check = (id)=>{
        if(rate==id) return "checked";
        else return ""
    }

    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {pName}
                        <div className="badge text-white badge-error">{bName}</div>
                    </h2>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                   
                    <div className="rating">
                        {count.map(id => (          
                                <input key={id} type="radio"  className={`mask mask-star ${()=>check(id)}`}/> 
                        ))}
                    </div>
                    <div className="card-actions flex justify-center mt-3 w-full">
                        <Link className='w-full' to={`/details/${product._id}`}><button  className="badge badge-success w-full ">View Details</button></Link>
                        <Link className='w-full'><button className="badge  badge-accent w-full">Update</button></Link>
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