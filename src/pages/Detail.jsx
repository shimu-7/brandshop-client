import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Detail = () => {
    const { id } = useParams();
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const product = products.find(product => product._id == id);
    const { pName, bName, photo, type, price,rating, description } = product;
    console.log(id, user);
    const email = user.email


    const handleCart = () => {
        console.log(id, user);
        const selectedProduct = { pName, bName, photo, type, price, rating, description,email };
        console.log(selectedProduct);

        fetch('https://brand-shop-server-o7rumxnjq-shamima-shimus-projects.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!!!',
                        text: 'Product is Added to cart.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }



    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <Navbar></Navbar>
            
            <div className="card bg-base-100 shadow-xl my-10">
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
                        <Link className='w-full' to={`/brandProducts/${product.bName}`}><button className="badge badge-success w-full ">Go Back</button></Link>
                        <button onClick={handleCart} className="badge  badge-accent w-full">Add To Cart</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Detail;