import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const logo = 'https://i.ibb.co/q1fc28g/logo.png';

    const links = <>
        <NavLink to="/" className="font-body text-bodyText text-[18px] hover:text-main duration-300">Home</NavLink>
        <NavLink to="/shop" className="font-body text-bodyText text-[18px] hover:text-main duration-300">Shop</NavLink>
        <NavLink to="/blog" className="font-body text-bodyText text-[18px] hover:text-main duration-300">Blog</NavLink>
    </>


    return (
        <div>
            {/* Upper header part */}
            <div className="bg-second p-2">
                <div className="container mx-auto flex justify-end items-center gap-10">
                    <div className="flex justify-center items-center gap-3">
                        <button className="border-[1px] uppercase px-3 py-1 border-white text-white font-heading tracking-[3px] text-[13px] hover:bg-white hover:text-main duration-500">Login</button>
                        <button className="border-[1px] uppercase px-3 py-1 border-white text-white font-heading tracking-[3px] text-[13px] hover:bg-white hover:text-main duration-500">Sign Up</button>
                    </div>
                </div>
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
                        <Link to="/"><img src={logo} alt="Website logo" className="w-full" /></Link>
                    </div>
                    {/* User profile */}
                    <div className="w-[30%] lg:w-[35%] flex justify-end items-center">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/my7qh9K/benz-logo.png" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;