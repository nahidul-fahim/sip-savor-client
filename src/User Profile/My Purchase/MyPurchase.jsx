import { useEffect, useState } from "react";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import axios from "axios";
import SinglePurchase from "./SinglePurchase"; import { Helmet } from "react-helmet";


const MyPurchase = () => {

    // Declaring states for different functions
    const [purchasedProducts, setPurchasedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // banner section background
    const pageBg = 'https://i.ibb.co/Q6HgH0b/purchase.png';
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';

    // Get current user
    const { currentUser } = useAuthenticate();
    const userEmail = currentUser.email;


    // fetching data by email
    useEffect(() => {
        axios.get(`http://localhost:5000/purchased/${userEmail}`, {withCredentials: true})
            .then(res => {
                const data = res.data;
                setPurchasedProducts(data);
                setLoading(false);
            })

    }, [userEmail])


    // Delte a product from cart
    const handleDelete = id => {
        const productId = id;

        fetch(`http://localhost:5000/purchased/${productId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    remainingProducts(id);
                }
            })
    };


    // re-assigning the cart list after delete a product
    const remainingProducts = id => {
        const remainingAfterDelete = purchasedProducts.filter(singleCart => singleCart._id !== id);
        setPurchasedProducts(remainingAfterDelete);
    };



    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }




    return (
        <div>
            <Helmet>
                <title>My Cart page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {/* Banner section */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-6xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">My Cart</h2>
            </div>

            {/* mapping data to show the cards */}
            <div className=" container mx-auto p-5 w-full md:w-[90%] lg:w-full mt-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    purchasedProducts.map(product => <SinglePurchase
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></SinglePurchase>)
                }
            </div>

        </div>
    );
};

export default MyPurchase;