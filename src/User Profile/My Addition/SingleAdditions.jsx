
import PropTypes from 'prop-types';


const SingleAdditions = ({ product }) => {

    const { _id, food, price, foodQuantity, foodCategory, foodDescription, foodOriginCountry, cookerName, foodImage } = product;


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const food = form.food.value;
        const price = form.price.value;
        const foodQuantity = form.foodQuantity.value;
        const foodImage = form.foodImage.value;
        const cookerName = form.cookerName.value;
        const foodOriginCountry = form.foodOriginCountry.value;
        const foodDescription = form.foodDescription.value;
        const foodCategory = form.foodCategory.value;

        const updatedProductInfo = {food, price, foodQuantity, foodImage, cookerName, foodOriginCountry, foodDescription, foodCategory};

        console.log(updatedProductInfo);



        // Close the modal on the update button clicked
        const modal = document.getElementById('my_modal_5');
        if (modal) {
            modal.close();
        }
    }


    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 font-heading bg-[#ececec] rounded-md'>
            <div className='w-full md:w-[40%]'>
                <img src={foodImage} alt="" className='flex-1 w-full rounded-l-md' />
            </div>

            <div className='w-full md:w-[60%] flex flex-col gap-5 justify-center items-start py-8 px-5 md:p-5'>
                <p className='bg-lightMain text-white font-medium px-3 py-1 text-[12px] tracking-[1px]'>{foodCategory}</p>
                <h2 className='text-xl font-bold tracking-[1px] text-second'>{food}</h2>
                <p className='text-[18px] font-bold text-[gray]'>${price}</p>
                <button
                    id='updateModal'
                    onClick={() => {
                        // handleUpdate(_id);
                        document.getElementById('my_modal_5').showModal()
                    }}
                    className='bg-second text-white px-4 py-1 font-medium hover:bg-main hover:text-white duration-500 uppercase tracking-[2px]'
                >Update</button>
            </div>


            {/* Modal to update product */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-second uppercase text-center font-heading">Update the product</h3>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="modal-action">
                        <form onSubmit={handleUpdate} method="dialog" className='w-full flex flex-col justify-center items-center gap-5'>
                            {/* if there is a button in form, it will close the modal */}

                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Food name</span>
                                </label>
                                <input type="text" name="food" id="food" defaultValue={food} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>


                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Food category</span>
                                </label>
                                <input type="text" name="foodCategory" id="foodCategory" defaultValue={foodCategory} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>

                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Food price</span>
                                </label>
                                <input type="text" name="price" id="price" defaultValue={`$${price}`} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>


                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Quantity</span>
                                </label>
                                <input type="number" name="foodQuantity" id="foodQuantity" defaultValue={foodQuantity} min="1" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>


                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Food origin country</span>
                                </label>
                                <input type="text" name="foodOriginCountry" id="foodOriginCountry" defaultValue={foodOriginCountry} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>

                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Cooker</span>
                                </label>
                                <input type="text" name="cookerName" id="cookerName" defaultValue={cookerName} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>

                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Photo</span>
                                </label>
                                <input type="text" name="foodImage" id="foodImage" defaultValue={foodImage} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>

                            <div className="w-full space-y-2">
                                <label>
                                    <span className="font-heading text-[sub] font-medium tracking-[1px]">Food description</span>
                                </label>
                                <textarea type="text" name="foodDescription" id="foodDescription" defaultValue={foodDescription} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            </div>

                            <input type="submit" value="Update product" className="font-heading font-medium uppercase tracking-[2px] bg-main hover:bg-second text-white px-5 py-2 w-full duration-500" />
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default SingleAdditions;


SingleAdditions.propTypes = {
    product: PropTypes.object,
    handleUpdate: PropTypes.func,
}