import PropTypes from 'prop-types';
import '../../Styles/homePageCards.css'

const TopSellCard = ({ product }) => {

    const { food, foodImage, foodCategory, price } = product;


    return (
        <div id='topSellCardsDiv' className='flex flex-col justify-center items-center gap-3 font-heading text-center border-[1px] border-main relative'>
            {/* <img src={foodImage} alt="" id='topSellCards' className='absolute top-0 right-0 w-[358px] h-[358px]'/> */}
            <div id='hoverArea' className='p-10 flex flex-col justify-center items-center gap-3 font-heading text-center z-50'
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000080, #00000080), url(${foodImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: "0"
                }}>
                <p className='bg-lightMain text-white font-medium px-3 py-1 text-[12px] tracking-[1px]'>{foodCategory}</p>
                <h2 className='text-xl font-bold tracking-[1px] text-white'>{food}</h2>
                <p className='text-[18px] font-bold text-white'>${price}</p>
                <button className='bg-white px-4 py-1 font-semibold hover:bg-main hover:text-white duration-500 uppercase tracking-[2px]'>Details</button>
            </div>
        </div>
    );
};

export default TopSellCard;


TopSellCard.propTypes = {
    product: PropTypes.object,
}