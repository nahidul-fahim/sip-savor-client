import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateProduct = () => {

    // banner section background
    const pageBg = 'https://i.ibb.co/Q6HgH0b/purchase.png';


    // Get data
    const { _id, food, price, foodQuantity, foodCategory, foodDescription, foodOriginCountry, cookerName, foodImage } = useLoaderData();

    console.log(price);


    // send updated data to database
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

        const updatedProductInfo = { food, price, foodQuantity, foodImage, cookerName, foodOriginCountry, foodDescription, foodCategory };

        // console.log(price);

        // sending updated data to database
        fetch(`http://localhost:5000/updateFood/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProductInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    successfulUpdate()
                }
                else {
                    failedUpdate("Couldn't update the product")
                }
            })
            .catch(error => {
                failedUpdate(error.code)
            })
    }


    // success notify
    const successfulUpdate = () =>
        toast.success('Product updated successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        });


    // Failure notify
    const failedUpdate = error =>
        toast.error(`${error}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        });




    return (
        <div>
            <ToastContainer />
            {/* Banner section */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-6xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">Update</h2>
            </div>


            {/* FOrm section */}
            <div className="mt-12 container mx-auto flex justify-center items-center p-5">
                <form onSubmit={handleUpdate} method="dialog" className='w-full md:w-2/3 lg:w-2/4 flex flex-col justify-center items-center gap-5'>
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
                        <input type="number" name="price" id="price" defaultValue={price} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
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
    );
};

export default UpdateProduct;