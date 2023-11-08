import PropTypes from 'prop-types';

const SinglePurchase = ({ product, handleDelete }) => {


    const { _id, food, price, foodCategory, foodImage, orderedDate } = product;



    return (
        <div className=' flex flex-col justify-center items-center gap-3 p-4 relative'>
            <img src={foodImage} alt={food} className='rounded w-full' />
            <h4 className='text-[10px] font-body bg-lightMain px-3 py-1 text-white font-medium tracking-[2px] absolute top-6 right-6'>{foodCategory}</h4>

            {/* Food details section */}
            <div className='flex flex-col w-full justify-center items-start gap-3'>
                <h2 className='text-left text-sub font-body font-semibold tracking-[1px]'>{food}</h2>
                <p className='font-body font-medium text-[gray]'>Purchased on: {orderedDate}</p>
                <div id='innerDiv' className="flex justify-between items-center w-full">
                    <p className='font-bold font-heading text-[18px] tracking-[1px] text-main'>${price}</p>
                    <button onClick={() => handleDelete(_id)} className='bg-second text-[14px] uppercase font-medium px-3 py-1 text-white font-heading tracking-[1px] hover:bg-main duration-500'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePurchase;


SinglePurchase.propTypes = {
    product: PropTypes.object,
    handleDelete: PropTypes.func,
}