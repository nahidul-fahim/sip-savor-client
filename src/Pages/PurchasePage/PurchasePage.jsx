import { useLoaderData } from "react-router-dom";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PurchasePage = () => {

    // banner section background
    const pageBg = 'https://i.ibb.co/Q6HgH0b/purchase.png';

    // Get data
    const { _id, food, price, foodQuantity, foodCategory, foodDescription, foodOriginCountry, cookerName, foodImage, orderCount } = useLoaderData();

    // Get currently logged in user
    const { currentUser } = useAuthenticate();
    const buyer = currentUser?.displayName;
    const buyerEmail = currentUser?.email;

    // Date picker
    const [startDate, setStartDate] = useState(new Date());

    // Handle purchase function
    const handlePurchase = e => {
        e.preventDefault();
        const orderedQuantity = parseInt(e.target.foodQuantity.value);
        const orderedDate = startDate;

        const purchaseInfo = { food, price, foodCategory, foodDescription, foodOriginCountry, cookerName, foodImage, orderedQuantity, orderedDate, buyerEmail }

        fetch('http://localhost:5000/purchasedProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    successfullPurchase()
                }
            })
            .catch(error => {
                const code = error.code;
                if (code) {
                    failedPurchase(code)
                }
            })
    }



    // success notify
    const successfullPurchase = () =>
        toast.success('Account created successfully', {
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
    const failedPurchase = error =>
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
                <h2 className="text-6xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">PURCHASE</h2>
            </div>

            {/* Form section */}
            <div className="container mx-auto mt-[100px] w-full flex flex-col justify-center items-center">
                <form onSubmit={handlePurchase} className="w-full lg:w-2/3 px-5 lg:px-0 flex flex-col justify-center items-center gap-10">

                    {/* Food name + quantity */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="w-full md:w-[50%] space-y-2">
                            <label>
                                <span className="font-heading text-[sub] font-medium tracking-[1px]">Food name</span>
                            </label>
                            <input type="text" name="food" id="food" value={food} readOnly className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                        </div>

                        <div className="w-full md:w-[50%] space-y-2">
                            <label>
                                <span className="font-heading text-[sub] font-medium tracking-[1px]">Quantity</span>
                            </label>
                            {
                                (foodQuantity === 0) ? <p className="font-heading text-[14px] text-[#bd2626] font-medium tracking-[1px]">Oops! Currently out of stock.</p>
                                    :
                                    <input required type="number" name="foodQuantity" id="foodQuantity" placeholder="Enter quantity" min="1" max={foodQuantity} className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                            }
                        </div>
                    </div>


                    {/* Food price + date */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="w-full md:w-[50%] space-y-2">
                            <label>
                                <span className="font-heading text-[sub] font-medium tracking-[1px]">Food price</span>
                            </label>
                            <input type="text" name="price" id="price" value={`$${price}`} readOnly className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                        </div>

                        <div className="w-full md:w-[50%] space-y-2 flex flex-col">
                            <label>
                                <span className="font-heading text-[sub] font-medium tracking-[1px]">Pick a date</span>
                            </label>
                            <DatePicker
                                showIcon
                                minDate={startDate}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={10}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa" className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                        </div>
                    </div>

                    {/* Buyer name + email */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="w-full md:w-[50%] space-y-2">
                            <label>
                                <span className="font-heading text-[sub] font-medium tracking-[1px]">Buyer name</span>
                            </label>
                            <input type="text" name="buyer" id="buyer" value={buyer} readOnly className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                        </div>

                        <div className="w-full md:w-[50%] space-y-2">
                            <label>
                                <span className="font-heading text-[sub] font-medium tracking-[1px]">Buyer email</span>
                            </label>
                            <input type="email" name="buyerEmail" id="buyer" value={buyerEmail}
                                readOnly className="focus:outline-none border-[1px] border-[lightgray] w-full px-5 py-2 font-heading tracking-[1px] text-[gray] font-medium focus:border-main" />
                        </div>
                    </div>
                    {
                        (foodQuantity === 0) ?
                            <input type="submit" value="MAKE YOUR PURCHASE" disabled className="font-heading font-medium uppercase tracking-[2px] bg-main hover:bg-second text-white px-5 py-2 w-full duration-500 disabled:bg-[#b6a1a1]" />
                            :
                            <input type="submit" value="MAKE YOUR PURCHASE" className="font-heading font-medium uppercase tracking-[2px] bg-main hover:bg-second text-white px-5 py-2 w-full duration-500" />
                    }
                </form>
            </div>
        </div>
    );
};

export default PurchasePage;