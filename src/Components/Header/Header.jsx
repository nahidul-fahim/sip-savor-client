import { Link, NavLink } from "react-router-dom";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {

    // get info from authprovider using custom hook
    const { currentUser, logOutUser, loading } = useAuthenticate();

    // website logo + loading gif
    const logo = 'https://i.ibb.co/nmVcY5P/logo.png';
    const loadingGif = 'https://i.ibb.co/wMSm3Kn/loading-gif-bg.gif';

    // Navigation links
    const links = <>
        <NavLink to="/" className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[3px]">Home</NavLink>
        <NavLink to="/shop" className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[3px]">Shop</NavLink>
        <NavLink to="/blog" className="font-body text-bodyText text-[14px] hover:text-main duration-300 uppercase font-semibold tracking-[3px]">Blog</NavLink>
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

        console.log(currentUser);


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
                                    <button onClick={handleLogOut} className="border-[1px] uppercase px-3 py-1 border-white text-white font-heading tracking-[2px] text-[13px] hover:bg-white hover:text-main duration-500">Log out</button>
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
            <div className="bg-headerBg py-1 px-5">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Navbar */}
                    <div className="navbar w-[30%] lg:w-[35%]">
                        <div className="dropdown">
                            <label tabIndex={0} className="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                {links}
                            </ul>
                        </div>

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 flex justify-start items-center gap-7">
                                {links}
                            </ul>
                        </div>
                    </div>
                    {/* Logo */}
                    <div className="w-[40%] lg:w-[30%] flex justify-center items-center cursor-pointer">
                        <Link to="/"><img src={logo} alt="Website logo" className="w-full hover:scale-110 duration-500"/></Link>
                    </div>
                    {/* User profile */}
                    <div className="w-[30%] lg:w-[35%] flex justify-end items-center">
                        {
                            currentUser ?
                                <div className="flex justify-center items-center gap-2 md:gap-5">
                                    <h3 className="text-[13px] font-body font-semibold tracking-[2px] text-sub">{currentUser.displayName}</h3>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={currentUser.photoURL} />
                                        </div>
                                    </label>
                                </div>
                                :
                                ''
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;