import { useState } from "react";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    // Getting info from useAuthenticate custom hook
    const { logInUser, googleSignIn } = useAuthenticate();

    const restaurantBg = 'https://i.ibb.co/bRz6SG2/restaurant-bg.png';
    const [showPassword, setShowPassword] = useState(false);


    // Password show-hide manage
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    // Getting value from the login form to login the user
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userDetails = { email, password };

        const logInForm = document.getElementById('logInForm');

        logInUser(email, password)
            .then(userInfo => {
                const user = userInfo.user;
                if (user) {
                    successLogin();
                    logInForm.reset();
                }

            })
            .catch(error => {
                const code = error.code;
                if (code) {
                    failedLogin(code);
                }
            })
    }


    // Login user with Google
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(userInfo => {
            const user = userInfo.user;
            if(user) {
                successLogin();
            }
        })
        .catch(error => {
            const code = error.code;
            if (code) {
                failedLogin(code);
            }
        })
    }


    // success notify
    const successLogin = () =>
        toast.success('Logged in successfully', {
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
    const failedLogin = error =>
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
            {/* Banner part */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${restaurantBg})`
                }}>
                <h2 className="text-7xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">log in</h2>
            </div>

            {/* Form part */}
            <div className="container mx-auto mt-[100px] mb-[100px] flex flex-col justify-center items-center gap-12 w-full px-5 lg:px-0">
                <form onSubmit={handleSignUp} id="logInForm" className="w-full lg:w-1/3 font-body space-y-8">
                    <input required type="email" name="email" id="email" placeholder="Your Email" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                    <div className="relative flex flex-col justify-center items-center">
                        <input required type={!showPassword ? "password" : "text"} name="password" id="password" placeholder="Your Password" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                        <span className="absolute right-7 top-5" onClick={handleShowPassword}>
                            {
                                showPassword ? <BsFillEyeFill></BsFillEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>
                            }
                        </span>
                    </div>
                    <input type="submit" value="Log in" className="w-fit bg-main px-5 py-2 font-heading uppercase text-white tracking-[3px] font-medium hover:bg-second duration-500 hover:scale-110 cursor-pointer" />
                </form>

                <button onClick={handleGoogleLogin} className="uppercase font-semibold tracking-[2px] font-heading flex justify-center items-center gap-5 border-2 border-lightMain px-5 py-2 hover:border-main hover:scale-110 duration-500"> <FcGoogle className="text-2xl" /> <span>Log In with Google</span> </button>

                <h3 className="text-bodyText font-semibold tracking-[2px]">{'Don\'t'} have an account yet? <span className="text-main border-b-0 pb-1 cursor-pointer hover:border-b-2"><Link to="/signup">Sign up</Link></span> </h3>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;