import { useEffect, useState } from "react";
import TopSellCard from "./TopSellCard";
import { Link } from "react-router-dom";
import useAxiosFetch from "../../Hooks/useAxiosFetch/useAxiosFetch";


const TopProduct = () => {

    // Hooks
    const [loading, setLoading] = useState(true);
    const [sortedProducts, setSortedProducts] = useState([]);
    const axiosFetch = useAxiosFetch();

    // Necessary images
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';


    // Fetch the data to get all products from database
    useEffect(() => {
        axiosFetch.get('/allfoods')
            .then(res => {
                const data = res.data;
                const sortedProducts = data.sort((a, b) => {
                    const first = a.orderCount;
                    const second = b.orderCount;
                    return second - first;
                })
                setSortedProducts(sortedProducts.slice(0, 6));
                setLoading(false);
            })
    }, [axiosFetch])





    // loading for data fetching from database
    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }


    return (
        <div className="container mx-auto p-5 py-[100px] flex flex-col justify-center items-center">
            <h3 className="text-8xl md:text-9xl font-fancy text-main">Favourite</h3>
            <h2 className="mt-[-40px] text-5xl tracking-[1px] font-extrabold uppercase font-heading text-second">Menus</h2>

            {/* mapping data to show the cards */}
            <div className="w-[90%] lg:w-full mt-[90px] grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    sortedProducts.map(product => <TopSellCard
                        key={product._id}
                        product={product}></TopSellCard>)
                }
            </div>
            <Link to="/shop"><button className='bg-main text-white px-5 mt-10 py-2 font-semibold hover:bg-second hover:text-white duration-500 uppercase tracking-[2px]'>All Products</button></Link>
        </div>

    );
};

export default TopProduct;