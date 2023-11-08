import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import { Helmet } from "react-helmet";


const AddNewProduct = () => {

    // banner section background
    const pageBg = 'https://i.ibb.co/Q6HgH0b/purchase.png';


    // Get current user
    const { currentUser } = useAuthenticate();
    const addedPerson = currentUser.displayName;
    const addedBy = currentUser.email;
    console.log(currentUser, addedBy, addedPerson);


    // Send info to database to add new product
    const handleAddProduct = e => {
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

        const newProductInfo = { food, price, foodQuantity, foodImage, cookerName, foodOriginCountry, foodDescription, foodCategory, addedBy, addedPerson };


        // sending updated data to database
        fetch(`https://sip-savor-server-side.vercel.app/addnewproduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProductInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    successfulAdd()
                }
                else {
                    failedAdd("Couldn't add the product")
                }
            })
    }


    // success notify
    const successfulAdd = () =>
        toast.success('New product added successfully!', {
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
    const failedAdd = error =>
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
            <Helmet>
                <title>Add New Product Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <ToastContainer />
            {/* Banner section */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-6xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">Add Product</h2>
            </div>


            {/* FOrm section */}
            <div className="mt-12 container mx-auto flex justify-center items-center p-5">
                <form onSubmit={handleAddProduct} method="dialog" className='w-full md:w-2/3 lg:w-2/4 flex flex-col justify-center items-center gap-5'>
                    {/* if there is a button in form, it will close the modal */}

                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Food name</span>
                        </label>
                        <input type="text" name="food" id="food" required placeholder="Food name" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>


                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Food category</span>
                        </label>
                        <input type="text" name="foodCategory" id="foodCategory" required placeholder="Food category" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>

                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Food price</span>
                        </label>
                        <input type="number" step=".01" name="price" id="price" required placeholder="Food price ($)" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>


                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Quantity</span>
                        </label>
                        <input type="number" name="foodQuantity" id="foodQuantity" required placeholder="Available quantity" min="1" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>


                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Food origin country</span>
                        </label>
                        <input type="text" name="foodOriginCountry" id="foodOriginCountry" required placeholder="Food origin country" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>

                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Cooker</span>
                        </label>
                        <input type="text" name="cookerName" id="cookerName" required placeholder="Cooker name" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>

                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Photo</span>
                        </label>
                        <input type="text" name="foodImage" id="foodImage" required placeholder="Food image URL" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>

                    <div className="w-full space-y-2">
                        <label>
                            <span className="font-heading text-[sub] font-medium tracking-[1px]">Food description</span>
                        </label>
                        <textarea type="text" name="foodDescription" id="foodDescription" required placeholder="Food short description" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                    </div>

                    <input type="submit" value="Add product" className="font-heading font-medium uppercase tracking-[2px] bg-main hover:bg-second text-white px-5 py-2 w-full duration-500" />
                </form>
            </div>

        </div>
    );
};

export default AddNewProduct;