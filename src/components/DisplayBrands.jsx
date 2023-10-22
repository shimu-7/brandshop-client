import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const DisplayBrands = ({ brand }) => {
    const {darkMode} = useContext(AuthContext);
    console.log(brand)
    return (
        <div className={` ${darkMode ? "dark" : "light"}`}>
            <div className="card  bg-base-100 shadow-2xl">
                <figure><img className='h-40 w-full' src={brand.image} alt="Shoes" /></figure>
               {
                !darkMode ?  <div className='w-full h-[1px] bg-gray-300'></div>: ""
               }
                <div className={`card-body ${darkMode ? "dark" : "light"} `}>
                    <h2 className={`card-title ${darkMode ? "dark" : "light"} `}>{brand.brandName}</h2>
                </div>
            </div>

        </div>
    );
};

DisplayBrands.propTypes = {
    brand: PropTypes.object
}

export default DisplayBrands;