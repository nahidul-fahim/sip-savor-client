import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../Styles/banner.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const FirstBanner = () => {

    const coffeeImg = 'https://i.ibb.co/w4HgxQg/coffee-banner.png';
    const pizzaImg = 'https://i.ibb.co/x7q8wYT/pizza-banner.png';
    const burgerImg = 'https://i.ibb.co/qJB8cPd/burger-banner.png';
    const tacoImg = 'https://i.ibb.co/vjffNzD/taco-banner.png';
    const burritoImg = 'https://i.ibb.co/YLs3FT3/burrilo-banner.png';


    const properties = {
        prevArrow: <button className='button-style'><FaAngleLeft /></button>,
        nextArrow: <button className='button-style'><FaAngleRight /></button>
    }


    return (
        <Zoom {...properties} scale={1.4}>
            <div className="each-slide-effect">
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, #00000030, #00000030) , url(${coffeeImg})`,
                }}>
                    <span className='container flex flex-col justify-center items-center'>
                        <h3 className='-z-0 text-[80px] md:text-9xl font-fancy text-lightMain text-center'>Sip, Savor</h3>
                        <h2 className='mt-[-75px] md:mt-[-80px] text-[90px] md:text-[130px] z-50 font-extrabold text-center text-white uppercase'>Coffee</h2>
                        <Link> <button className='text-white font-medium border-2 uppercase font-heading text-xl border-main px-5 py-2 tracking-[4px] hover:bg-main duration-500'>Shop</button></Link>
                    </span>
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000080) , url(${pizzaImg})`,
                }}>
                    <span className='container flex flex-col justify-center items-center'>
                        <h3 className='-z-0 text-[80px] md:text-9xl font-fancy text-lightMain text-center'>Slice Heaven</h3>
                        <h2 className='mt-[-75px] md:mt-[-80px] text-[90px] md:text-[130px] z-50 font-extrabold text-center text-white uppercase'>Pizza</h2>
                        <Link> <button className='text-white font-medium border-2 uppercase font-heading text-xl border-main px-5 py-2 tracking-[4px] hover:bg-main duration-500'>Shop</button></Link>
                    </span>
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000080) , url(${burgerImg})`,
                }}>
                    <span className='container flex flex-col justify-center items-center'>
                        <h3 className='-z-0 text-[80px] md:text-9xl font-fancy text-lightMain text-center'>Juicy Bites</h3>
                        <h2 className='mt-[-75px] md:mt-[-80px] text-[90px] md:text-[130px] z-50 font-extrabold text-center text-white uppercase'>Burger</h2>
                        <Link> <button className='text-white font-medium border-2 uppercase font-heading text-xl border-main px-5 py-2 tracking-[4px] hover:bg-main duration-500'>Shop</button></Link>
                    </span>
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000080) , url(${tacoImg})`,
                }}>
                    <span className='container flex flex-col justify-center items-center'>
                        <h3 className='-z-0 text-[80px] md:text-9xl font-fancy text-lightMain text-center'>Taco Fiesta</h3>
                        <h2 className='mt-[-75px] md:mt-[-80px] text-[90px] md:text-[130px] z-50 font-extrabold text-center text-white uppercase'>Taco</h2>
                        <Link> <button className='text-white font-medium border-2 uppercase font-heading text-xl border-main px-5 py-2 tracking-[4px] hover:bg-main duration-500'>Shop</button></Link>
                    </span>
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000080) , url(${burritoImg})`,
                }}>
                    <span className='container flex flex-col justify-center items-center'>
                        <h3 className='-z-0 text-[80px] md:text-9xl font-fancy text-lightMain text-center'>Tasty Wrap</h3>
                        <h2 className='mt-[-75px] md:mt-[-80px] text-[90px] md:text-[130px] z-50 font-extrabold text-center text-white uppercase'>Burrito</h2>
                        <Link> <button className='text-white font-medium border-2 uppercase font-heading text-xl border-main px-5 py-2 tracking-[4px] hover:bg-main duration-500'>Shop</button></Link>
                    </span>
                </div>
            </div>

        </Zoom>
    );
};

export default FirstBanner;