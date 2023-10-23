import PropTypes from 'prop-types';

const DisplayBrandProduct = ({ product }) => {
    const { pName, bName, photo, type, price, rating, description } = product;
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
                    <div className="card-actions flex justify-center mt-3 w-full">
                        <div className="badge badge-success w-full ">View Details</div>
                        <div className="badge  badge-accent w-full">Update</div>
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