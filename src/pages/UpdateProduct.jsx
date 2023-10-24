import {  useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { pName, bName, photo, type, price, rating, description } = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const pName = e.target.pName.value;
        const bName = e.target.bName.value;
        const photo = e.target.photo.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const UpdatedProduct = { pName, bName, photo, type, price, rating, description };

        console.log(UpdatedProduct)

        fetch(`https://brand-shop-server-o7rumxnjq-shamima-shimus-projects.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Updated Successfully!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })
                }
            })
    }
    return (
        <div className="max-w-6xl  mx-auto">
            <Navbar></Navbar>
            <h3 className="text-4xl text-center my-10 italic font-semibold">Add New Product</h3>
            <form onSubmit={handleUpdateProduct}>
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name" className="input input-bordered w-full" defaultValue={pName} name="pName" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" defaultValue={bName} className="input input-bordered w-full" name="bName" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" name="photo" />
                        </label>
                    </div>

                </div>
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" name="type" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" defaultValue={price} className="input input-bordered w-full" name="price" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" name="rating" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" placeholder="About Product" className="input input-bordered w-full" name="description" /> */}
                            <textarea className="textarea w-full textarea-bordered h-24" placeholder="About Product" defaultValue={description} name="description"></textarea>
                        </label>
                    </div>

                </div>


                <div>

                    <input type="submit" value="Update Product" className=" mt-3 bg-slate-200 font-bold input input-bordered w-full" />
                </div>

            </form>
            <Footer></Footer>

        </div>
    );
};

export default UpdateProduct;