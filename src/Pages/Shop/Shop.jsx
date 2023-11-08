import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";


const Shop = () => {

    // Necessary images
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';
    const pageBg = 'https://i.ibb.co/FJFWZDC/dining.png';

    // Declaring states for different functions
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the data to get all products from database
    useEffect(() => {
        axios.get("http://localhost:5000/allfoods")
            .then(res => {
                const data = res.data;
                setAllProducts(data);
                setLoading(false);
            })
    }, [])



    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }
    

    return (
        <div>
            {/* Banner Part */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-7xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">Shop</h2>
            </div>

            {/* Getting all products section */}
            <div className="container mx-auto p-5 mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-around content-around">
                {
                    allProducts.map(singleProduct => <SingleProduct
                        key={singleProduct._id}
                        singleProduct={singleProduct}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Shop;