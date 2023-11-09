import { useEffect, useState } from "react";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import axios from "axios";
import SingleAdditions from "./SingleAdditions";
import { Helmet } from "react-helmet";


const MyAddition = () => {

    // Declaring states for different functions
    const [userProducts, setUserProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // banner section background
    const pageBg = 'https://i.ibb.co/Q6HgH0b/purchase.png';
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';

    // Get current user
    const { currentUser } = useAuthenticate();
    const userEmail = currentUser.email;



    // fetching data by email
    useEffect(() => {
        axios.get(`http://localhost:5000/userFoods/${userEmail}`, { withCredentials: true })
            .then(res => {
                const data = res.data;
                setUserProducts(data);
                setLoading(false);
            })

    }, [userEmail])



    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }




    return (
        <div>
            <Helmet>
                <title>My Addition Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {/* Banner section */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-6xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">My Addition</h2>
            </div>

            {/* mapping data to show the cards */}
            <div className=" container mx-auto p-5 w-full md:w-[90%] lg:w-full mt-[90px] grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    userProducts.map(product => <SingleAdditions
                        key={product._id}
                        product={product}
                    ></SingleAdditions>)
                }
            </div>

        </div>
    );
};

export default MyAddition;