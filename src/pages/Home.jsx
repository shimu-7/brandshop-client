import { useContext, useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import DisplayBrands from "../components/DisplayBrands";



const Home = () => {
    const { darkMode } = useContext(AuthContext);
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className={` ${darkMode ? "dark" : "light"}`}>
            {/* <h2 className="3xl">this is home page</h2> */}
            <Navbar></Navbar>
            <div className="">
                
                <div className="hero min-h-screen relative mt-5" style={{ backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/mclarenartura-silver-643584f5e8b51.jpeg?crop=0.781xw:1.00xh;0.0826xw,0&resize=640:*)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content  text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl italic font-bold">Welcome <br />to a World of Wheels</h1>
                            <h1 className="mb-5 text-4xl italic font-semibold">Find Your</h1>
                            <h1 className="mb-5 italic text-5xl font-bold">
                                DREAM CAR
                            </h1>
                            <p></p>

                        </div>
                    </div>


                </div>
            </div>


            <h2 className="text-4xl font-bold  text-center mt-20">Explore a Gallery of Iconic Brand Names</h2>
            <div className="grid md:grid-cols-3 gap-5 mt-10 max-w-6xl mx-auto">
                {
                    brands.map(brand => <DisplayBrands key={brand.id} brand={brand}></DisplayBrands>)
                }
            </div>

            <h2 className="text-4xl font-bold  text-center mt-20 mb-6">Some Exclusive Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <img className="h-60" src="https://www.topgear.com/sites/default/files/news-listicle/image/bmw_750li_xdrive_19_0.jpg" alt="" />
                <img  className="h-60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrIeM_Cwlvk2V4LFyuvjrU8Jfb8oEu_ZezFbno2civx-H47SdaIraTIx4ha7ZH2ns6f4&usqp=CAU" alt="" />
                <img className="h-60" src="https://hips.hearstapps.com/autoweek/assets/s3fs-public/cen-1.jpg" alt="" />
                <img className="h-60" src="https://moneyinc.com/wp-content/uploads/2022/04/2017-Honda-NSX-750x422.jpg" alt="" />
            </div>

            <div className="grid mt-5 py-5 md: grid-cols-4 gap-5 max-w-6xl  mx-auto text-center">
                <div>
                    <h2 className="text-3xl text-red-400 font-semibold">674</h2>
                    <p>Happy Client</p>
                </div>
                <div>
                    <h2 className="text-3xl text-red-400 font-semibold">987</h2>
                    <p>Vehicle Sell</p>
                </div>
                <div>
                    <h2 className="text-3xl text-red-400 font-semibold">15</h2>
                    <p>Year of Experience</p>
                </div>
                <div>
                    <h2 className="text-3xl text-red-400 font-semibold">49</h2>
                    <p>Award Winning</p>
                </div>
            </div>

            


        </div>
    );
};

export default Home;