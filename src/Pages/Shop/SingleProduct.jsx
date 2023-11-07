import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleProduct = ({ singleProduct }) => {

    const { _id, food, foodImage, foodCategory, price, foodQuantity } = singleProduct;

    return (

        // Single card view
        <div className=' flex flex-col justify-center items-center gap-3 p-4 relative'>
            <img src={foodImage} alt={food} className='rounded w-full' />
            <h4 className='text-[10px] font-body bg-lightMain px-3 py-1 text-white font-medium tracking-[2px] absolute top-6 right-6'>{foodCategory}</h4>

            {/* Food details section */}
            <div className='flex flex-col w-full justify-center items-start gap-3'>
                <h2 className='text-left text-sub font-body font-semibold tracking-[1px]'>{food}</h2>
                <p className='font-body font-medium text-[gray]'>{foodQuantity} in stock</p>
                <div id='innerDiv' className="flex justify-between items-center w-full">
                    <p className='font-bold font-heading text-[18px] tracking-[1px] text-main'>${price}</p>
                    <Link to={`${_id}`}><button className='bg-second text-[14px] uppercase font-medium px-3 py-1 text-white font-heading tracking-[1px] hover:bg-main duration-500'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;


SingleProduct.propTypes = {
    singleProduct: PropTypes.object,
}