import { Link, NavLink } from "react-router-dom";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa";

const Header = () => {

    // get info from authprovider using custom hook
    const { currentUser, logOutUser, loading } = useAuthenticate();

    // website logo + loading gif
    const logo = 'https://i.ibb.co/qR6mqLh/logo.png';
    const loadingGif = 'https://i.ibb.co/HrZVdVr/loading-animation.gif';

    // Large devicve Navigation links
    const largeLinks = <>
        <NavLink to="/"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "scale(1.2)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Home</NavLink>

        <NavLink to="/shop"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "scale(1.2)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Shop</NavLink>
        <NavLink to="/blog"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "scale(1.2)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Blog</NavLink>
    </>


    // Small devicve Navigation links
    const smallLinks = <>
        <NavLink to="/"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "translate(10px,0px)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Home</NavLink>

        <NavLink to="/shop"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "translate(10px,0px)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Shop</NavLink>
        <NavLink to="/blog"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "translate(10px,0px)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Blog</NavLink>
    </>


    // My profile navigation links
    const myProfileLinks = <>
        <NavLink to="/myaddition"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "translate(10px,0px)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >My Addition</NavLink>

        <NavLink to="/addnewproduct"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "translate(10px,0px)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >Add new product</NavLink>

        <NavLink to="/mypurchase"
            className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px]"
            style={({ isActive }) => {
                return {
                    color: isActive ? "#9F4B4B" : "",
                    fontWeight: isActive ? "bold" : "",
                    transform: isActive ? "translate(10px,0px)" : "",
                    transition: isActive ? "transform 1.1s" : ""
                };
            }}
        >My Purchase</NavLink>
    </>




    // Handle logout
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                successLogout();
            })
            .catch(error => {
                if (error) {
                    failedLogout(error);
                }
            })
    }

    // success notify
    const successLogout = () =>
        toast.success('Logged out successfully', {
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
    const failedLogout = error =>
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
            {/* Upper header part */}
            <div className="bg-second p-2">
                <ToastContainer />

                {
                    loading ?
                        <div className="container mx-auto flex justify-end items-center gap-10">
                            <img src={loadingGif} className="w-[30px] h-[30px]" />
                        </div>
                        :
                        <div className="container mx-auto flex justify-end items-center gap-10">
                            {
                                currentUser ?
                                    <div className="flex justify-center items-center gap-5">
                                        <label tabIndex={0} className="avatar">
                                            <div className="w-7 rounded-full">
                                                <img src={currentUser.photoURL} />
                                            </div>
                                        </label>
                                        <p className="text-[13px] font-body font-semibold tracking-[2px] text-white">{currentUser.displayName}</p>
                                        <button onClick={handleLogOut} className="border-[1px] uppercase px-3 py-1 border-white text-white font-heading tracking-[2px] text-[13px] hover:bg-white hover:text-main duration-500">Log out</button>
                                    </div>
                                    :
                                    <div className="flex justify-center items-center gap-3">
                                        <Link to="/login"><button className="border-[1px] uppercase px-3 py-1 border-white text-white font-heading tracking-[2px] text-[13px] hover:bg-white hover:text-main duration-500">Login</button></Link>
                                        <Link to="/signup"><button className="border-[1px] uppercase px-3 py-1 border-white text-white font-heading tracking-[2px] text-[13px] hover:bg-white hover:text-main duration-500">Sign Up</button></Link>
                                    </div>
                            }
                        </div>
                }
            </div>

            {/* Lower header part */}
            <div className="bg-white px-5">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Navbar */}
                    <div className="navbar w-[50%] lg:w-[30%] space-x-5">
                        {/* Mobile section */}
                        <div className="dropdown">
                            <label tabIndex={0} className="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow w-52 bg-white space-y-3">
                                {smallLinks}
                            </ul>
                        </div>

                        {/* Website logo */}
                        <Link to="/"><img src={logo} alt="Website logo" className="w-[90%] lg:w-[70%] hover:scale-110 duration-500" /></Link>

                    </div>

                    {/* Navigation links */}
                    <div className="w-[50%] lg:w-[70%] flex justify-end items-center cursor-pointer gap-7">
                        {/* Large device links */}
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 flex justify-start items-center gap-7">
                                {largeLinks}
                            </ul>
                        </div>

                        {/* My profile links for all devices */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>
                                <p className="flex justify-center items-center gap-2 font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[1px] cursor-pointer">My Account <FaUser /> </p>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow w-52 bg-white space-y-3">
                                {myProfileLinks}
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;