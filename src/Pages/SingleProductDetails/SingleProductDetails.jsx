import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";


const SingleProductDetails = () => {

    // Get data 
    const { _id, food, foodImage, foodCategory, price, foodQuantity, cookerName, foodOriginCountry, foodDescription } = useLoaderData();


    return (
        <div className="p-5 md:p-10 container mx-auto justify-center items-center gap-5 mt-8 md:mt-10 lg:mt-12">
            <Helmet>
                <title>Product Detail page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">

                {/* Food image */}
                <div className="w-full md:w-[50%]">
                    <img src={foodImage} alt={`${food} image`} className="w-full" />
                </div>

                {/* Food details */}
                <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-4">
                    <p className="font-body text-[14px] uppercase tracking-[1px] bg-[#e2e2e2] text-sub font-semibold px-3 py-1">{foodCategory}</p>
                    <h2 className="border-b-[1px] border-[lightgray] pb-5 w-[80%] font-body font-bold text-xl tracking-[1px]">{food}</h2>
                    <p className="font-body text-[gray] font-medium"><span className="font-semibold text-second">Availability:</span> {foodQuantity} in stock</p>
                    <p className="font-heading text-main font-bold text-xl tracking-[1px]">${price}</p>
                    <p className="font-body text-[gray] text-[14px] font-regular">{foodDescription}</p>
                    <p className="font-heading text-second font-semibold ">Origin country: <span className="tracking-[1px] text-[gray] font-medium mt-1">{foodOriginCountry}</span></p>
                    <p className="font-heading text-second font-semibold ">Cooked by: <span className="tracking-[1px] text-[gray] font-medium mt-1">{cookerName}</span></p>
                    <Link to={`/purchase/${_id}`}><button className="uppercase font-heading bg-main text-white px-4 py-1 font-medium hover:bg-second duration-500 tracking-[1px]">ORDER NOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;