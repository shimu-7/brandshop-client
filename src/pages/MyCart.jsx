
import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import DisplayCart from "../components/DisplayCart";


const MyCart = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-bl488qyui-shamima-shimus-projects.vercel.app/cart')
            .then(res => res.json())
            .then(data => {
                const myProducts = data.filter(one => one.email === email);
                setProducts(myProducts);
            })
    }, [])

    console.log(products);



    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-bold mt-10 ">Product in my Cart</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    products.map(product => <DisplayCart key={product._id} products={products} setProducts={setProducts} product={product}></DisplayCart>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;