import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";


const Shop = () => {

    const loadingGif = 'https://i.ibb.co/wQ8yX0N/loading-animation2.gif';

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
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[80px] h-[80px]" /></div>
    }

    // console.log(allProducts);

    return (
        <div>
            <h2 className="text-5xl font-heading text-main font-extrabold">Shop page</h2>
            {
                allProducts.map(singleProduct => <SingleProduct
                key={singleProduct._id}
                singleProduct={singleProduct}></SingleProduct>)
            }
        </div>
    );
};

export default Shop;