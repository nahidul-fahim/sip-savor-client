import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { FaSistrix } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAxiosFetch from "../../Hooks/useAxiosFetch/useAxiosFetch";


const Shop = () => {

    // Necessary images
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';
    const pageBg = 'https://i.ibb.co/FJFWZDC/dining.png';

    // Hooks and custom hooks
    const [initialProducts, setInitialProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(initialProducts);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProductNumber, setTotalProductNumber] = useState(0)
    const axiosFetch = useAxiosFetch();


    // get the total number of products to calculate pagination
    const total = useLoaderData();
    useEffect(() => {
        const totalProduct = total.total;
        setTotalProductNumber(totalProduct);
    }, [total.total])
    const productPerPage = 9;


    // Fetch the data to get all products from database
    useEffect(() => {
        axiosFetch.get(`/foodsoncollection?page=${currentPage}&size=${productPerPage}`)
            .then(res => {
                const data = res.data;
                setInitialProducts(data);
                setAllProducts(data);
                setLoading(false);
            })
    }, [axiosFetch, currentPage, productPerPage])


    // Handle search input
    const handleSearchInput = e => {
        setInputValue(e.target.value);
        // setting total product and to default(all) if search input is empty 
        if (e.target.value === '') {
            setTotalProductNumber(total.total);
            setAllProducts(initialProducts)
        }
    }

    const searchInput = inputValue.toLowerCase()


    if (loading) {
        return <div className="container mx-auto flex justify-center items-center h-[100vh]"><img src={loadingGif} className="w-[90px] h-[90px]" /></div>
    }

    // Handle search button function
    const handleSearch = () => {
        const filteredProducts = allProducts.filter(filtered => filtered.food.trim().toLowerCase().includes(searchInput));
        setAllProducts(filteredProducts);
        //setting pagination as per the amount of searched product
        setTotalProductNumber(filteredProducts.length);
    }


    // total page count and pagination
    const totalPages = Math.ceil(totalProductNumber / productPerPage);
    const pageNumber = [...Array(totalPages).keys()];



    return (
        <div>
            <Helmet>
                <title>Shop page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {/* Banner Part */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5 bg-cover"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${pageBg})`
                }}>
                <h2 className="text-7xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">Shop</h2>
            </div>


            {/* Search bar */}
            <div className="flex justify-end items-stretch container mx-auto p-5 mt-10">
                <div className="flex justify-center items-center">
                    <input onChange={handleSearchInput} className="border-t-[1px] border-[lightgray] border-b-[1px] border-l-[1px] rounded-l-md px-4 py-2 outline-none focus:border-[#ffa4a7] font-heading" type="text" name="search" id="" placeholder="search here..." />
                    <button onClick={handleSearch} className="bg-main self-stretch px-4 py-2 text-white rounded-r-md border-main border-[1px] hover:bg-[white] hover:text-main font-bold"><FaSistrix /></button>
                </div>
            </div>


            {/* Getting all products section */}
            <div className="container mx-auto p-5 mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around content-around">
                {
                    allProducts.map(singleProduct => <SingleProduct
                        key={singleProduct._id}
                        singleProduct={singleProduct}></SingleProduct>)
                }
            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 gap-10">
                {
                    pageNumber.map(singlePage => {
                        const isSelected = currentPage === singlePage;
                        const buttonStyles = `bg-[lightgray] text-second px-2 py-1 font-semibold font-heading hover:bg-main hover:text-white duration-500 ${isSelected && 'bg-main text-white'}`;

                        return (
                            <button
                                onClick={() => setCurrentPage(singlePage)}
                                key={singlePage}
                                className={buttonStyles}
                            >
                                {singlePage + 1}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Shop;