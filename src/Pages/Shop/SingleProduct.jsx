import PropTypes from 'prop-types';

const SingleProduct = ({ singleProduct }) => {

    const { food, foodImage, foodCategory, price, foodQuantity } = singleProduct;

    return (
        <div>
            <img src={foodImage} alt="" className='rounded-md'/>
            <h4>{foodCategory}</h4>
            <h2>{food}</h2>
            <p>{foodQuantity}</p>
            <div>
                <button>Details</button>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default SingleProduct;


SingleProduct.propTypes = {
    singleProduct: PropTypes.object,
}