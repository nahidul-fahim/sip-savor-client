import { useState } from "react";
import useAuthenticate from "../../Hooks/useAuthenticate/useAuthenticate";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const SignUp = () => {

    // Getting info from useAuthenticate custom hook
    const { createNewUser, updateUserInfo, logOutUser } = useAuthenticate();

    const restaurantBg = 'https://i.ibb.co/bRz6SG2/restaurant-bg.png';
    const [showPassword, setShowPassword] = useState(false);
    const [passwordErrorMessage, setPassWordErrorMessage] = useState('');


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    // Getting value from the signup form to create an account
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        const photo = form.img.value;

        const regExPattern = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        setPassWordErrorMessage();

        if (!regExPattern.test(password)) {
            setPassWordErrorMessage("Must be at least 6 characters long and contain 1 capital letter, 1 special character");
            return;
        }

        const signUpForm = document.getElementById('signUpForm');

        createNewUser(email, password)
            .then(userInfo => {
                const currentUser = userInfo.user;
                updateUserInfo(currentUser, username, photo)
                successSignUp();
                signUpForm.reset();
                logOutUser();
            })
            .catch(error => {
                const code = error.code;
                failedSignUp(code);
            })
    }


    // success notify
    const successSignUp = () =>
        toast.success('Account created successfully', {
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
    const failedSignUp = error =>
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
            <Helmet>
                <title>Sign up page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {/* Banner part */}
            <div className="h-[500px] flex flex-col justify-center items-center gap-5"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #00000050, #00000050), url(${restaurantBg})`
                }}>
                <h2 className="text-7xl md:text-9xl font-bold text-center text-white uppercase tracking-[10px]">SIGN UP</h2>
            </div>

            {/* Form part */}
            <div className="container mx-auto mt-[100px] mb-[100px] flex flex-col justify-center items-center gap-10 w-full px-5 lg:px-0">
                <form onSubmit={handleSignUp} id="signUpForm" className="w-full lg:w-1/3 font-body space-y-8">
                    <input required type="text" name="name" id="name" placeholder="Your Name" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                    <input required type="email" name="email" id="email" placeholder="Your Email" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                    <input required type="username" name="username" id="username" placeholder="Your Username" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                    <div className="relative flex flex-col justify-center items-center">
                        <input required type={!showPassword ? "password" : "text"} name="password" id="password" placeholder="Enter Valid Password" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                        <span className="absolute right-7 top-5" onClick={handleShowPassword}>
                            {
                                showPassword ? <BsFillEyeFill></BsFillEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>
                            }
                        </span>
                        <div>
                            {
                                passwordErrorMessage ? <p className="text-[#ff5b5b] font-body text-[14px] tracking-[2px] font-medium pt-1">{passwordErrorMessage}</p> : ''
                            }
                        </div>
                    </div>
                    <input required type="text" name="img" id="img" placeholder="Your Image" className="focus:outline-none px-5 py-3 border-[1px] border-[lightgray] focus:border-lightMain text-bodyText w-full font-medium tracking-[2px]" />
                    <input type="submit" value="Sign Up" className="w-fit bg-main px-5 py-2 font-heading uppercase text-white tracking-[3px] font-medium hover:bg-second duration-500 hover:scale-110 cursor-pointer" />
                </form>
                <h3 className="text-bodyText font-semibold tracking-[2px]">Already have an account? <span className="text-main border-b-0 pb-1 cursor-pointer hover:border-b-2"><Link to="/login">Log In</Link></span> </h3>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SignUp;