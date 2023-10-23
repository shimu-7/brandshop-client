import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../shared/Navbar";
import { useEffect, useState } from "react";
import DisplayBrandProduct from "./DisplayBrandProduct";



const BrandProducts = () => {
    //const {name} = brandName
    const { brand } = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const pro = data.filter(one => one.bName.toLowerCase() === brand.toLowerCase());
                setProducts(pro);
            });
    }, [])



    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <Navbar></Navbar>
            {
                products.length == 0 ? <div>
                    <div className="card   bg-slate-500 mt-10 text-neutral-content">
                        
                        <div className="card-body  items-center text-center">
                           
                           <img className="w-28 h-28 rounded-full text-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxmVe5PiC3i4r0VMR2qtnFpSv8LQUb6y5UQ&usqp=CAU" alt="" />
                           <h2 className="card-title text-3xl">Sorry!!!!</h2>
                           <p>Unfortunately Products not Available</p>
                          
                       </div>
                    </div>
                </div> : 
            
            <div>
                <div className="carousel w-full h-96">
                    <div id="item1" className="carousel-item w-full">
                        <img src={products[0]?.photo} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={products[0]?.photo} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={products[0]?.photo} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>


                </div>
                <h3 className="text-3xl font-bold text-center my-10">Available <span className="font-bold text-red-500">{brand}</span> products</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    {
                        products.map(product => <DisplayBrandProduct key={product._id} product={product}></DisplayBrandProduct>)
                    }
                </div>
            </div>
}
            <div >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BrandProducts;