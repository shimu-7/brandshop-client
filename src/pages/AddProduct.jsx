import Swal from "sweetalert2";
import Navbar from "../shared/Navbar";
import Footer from "../components/Footer";


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const pName = e.target.pName.value;
        const bName = e.target.bName.value;
        const photo = e.target.photo.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const newProduct = { pName, bName, photo, type, price, rating, description };
        console.log(newProduct);

        fetch('https://brand-shop-server-bl488qyui-shamima-shimus-projects.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!!!',
                        text: 'Product Added Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
    }
    return (
        <div className="max-w-6xl  mx-auto min-h-screen">

            {/* <h2 className="3xl">this is add product page</h2> */}
            <Navbar></Navbar>
            <h3 className="text-4xl text-center my-10 italic font-semibold">Add New Product</h3>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name" className="input input-bordered w-full" name="pName" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" className="input input-bordered w-full" name="bName" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo Url" className="input input-bordered w-full" name="photo" />
                        </label>
                    </div>

                </div>
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Type" className="input input-bordered w-full" name="type" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" className="input input-bordered w-full" name="price" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Rating" className="input input-bordered w-full" name="rating" />
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
                            <textarea className="textarea w-full textarea-bordered h-24" placeholder="About Product" name="description"></textarea>
                        </label>
                    </div>

                </div>


                <div>

                    <input type="submit" value="Add Product" className=" mt-3 bg-slate-200 font-bold input input-bordered w-full" />
                </div>

            </form>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddProduct;