import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TodaySpecial = () => {

    // Necessary images
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';
    const parrlaxBg = 'https://i.ibb.co/FJFWZDC/dining.png';



    // Declaring states for different functions
    const [loading, setLoading] = useState(true);
    const [sortedProduct, setSortedProduct] = useState([]);

    // Fetch the data to get all products from database
    useEffect(() => {
        axios.get("https://sip-savor-server-side.vercel.app/allfoods")
            .then(res => {
                const data = res.data;
                const sortedProducts = data.sort((a, b) => {
                    const first = a.orderCount;
                    const second = b.orderCount;
                    return second - first;
                })
                setSortedProduct(sortedProducts.slice(0, 1));
                setLoading(false);
            })
    }, []);


    // loading for data fetching from database
    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }

    const topProduct = sortedProduct[0];


    return (
        <div className="py-[80px]"
            style={{
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(to bottom, #00000090, #00000090), url(${parrlaxBg})`
            }}>

            {/* conternt main container */}
            <div className="container mx-auto p-5 flex flex-col lg:flex-row justify-between items-center gap-[80px] lg:gap-5">

                {/* Heading and text */}
                <div className="w-[80%] lg:w-[50%] flex flex-col justify-center items-center text-center">
                    <h3 className="text-8xl md:text-9xl font-fancy text-lightMain">{'Today\'s'}</h3>
                    <h2 className="mt-[-40px] text-5xl tracking-[1px] font-extrabold uppercase font-heading text-white">Special</h2>
                    <h2 className="mt-10 text-2xl tracking-[1px] font-extrabold font-heading text-white">{topProduct.food}</h2>
                    <p className="text-[lightgray] font-medium text-center w-[80%] mt-5">{topProduct.foodDescription}</p>
                    <Link to={`/shop/${topProduct._id}`}><button className='bg-[#ffffff00] border-[1px] border-white text-white px-4 py-1 font-medium hover:bg-white hover:text-main duration-500 uppercase tracking-[2px] mt-8'>Details</button></Link>
                </div>

                {/* image container */}
                <div className="w-full md:w-[80%] lg:w-[50%] relative flex flex-col justify-center items-center">
                    <img src={topProduct.foodImage} alt="" className="flex-1 w-[80%] md:w-[50%] rounded-[50%]" />
                    <div className="bg-white w-[160px] h-[160px] absolute text-main flex flex-col justify-center items-center text-center gap-4 rounded-[100%] top-0 left-0 md:left-14 lg:left-20">
                        <h3 className="text-6xl font-bold">{topProduct.orderCount}</h3>
                        <p className="text-[14px] font-semibold tracking-[1px] uppercase">Total Orders</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TodaySpecial;