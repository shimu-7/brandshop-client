import Swal from "sweetalert2";


const DisplayCart = ({ product, setProducts, products }) => {
    const { pName, bName, photo, type, price, rating, _id } = product;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success',
                            )
                            const remaining = products.filter(pro => pro._id !== _id);
                            setProducts(remaining);

                        }
                    })
                console.log('Delete COnfirmed')
            }
        })

    }
    //console.log(product);
    return (
        <div>
            {
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{pName}
                            <div className="badge text-white badge-error">{bName}</div>
                        </h2>
                        <p>Type: {type}</p>
                        <p>Price: ${price}</p>

                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(_id)} className="btn bg-slate-500 text-white">Remove from Cart</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default DisplayCart;