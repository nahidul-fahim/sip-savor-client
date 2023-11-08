import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import '../../Styles/homePageCards.css'

const TopSellCard = ({ product }) => {

    const { _id, food, foodImage, foodCategory, price } = product;


    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-5 font-heading bg-[#ececec] rounded-md'>
            <div className='w-full md:w-[40%]'>
                <img src={foodImage} alt="" className='flex-1 w-full rounded-l-md' />
            </div>

            <div className='w-full md:w-[60%] flex flex-col gap-5 justify-center items-start py-8 px-5 md:p-5'>
                <p className='bg-lightMain text-white font-medium px-3 py-1 text-[12px] tracking-[1px]'>{foodCategory}</p>
                <h2 className='text-xl font-bold tracking-[1px] text-second'>{food}</h2>
                <p className='text-[18px] font-bold text-[gray]'>${price}</p>
                <Link to={`/shop/${_id}`}><button className='bg-second text-white px-4 py-1 font-medium hover:bg-main hover:text-white duration-500 uppercase tracking-[2px]'>Details</button></Link>
            </div>

        </div>
    );
};

export default TopSellCard;


TopSellCard.propTypes = {
    product: PropTypes.object,
}