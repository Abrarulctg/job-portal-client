import React, { useContext, useState } from 'react';
import { Helmet } from "react-helmet";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import googleIcon from '../../assets/google.png';
import avaterImg from '../../assets/male-avatar.json';
import Lottie from 'react-lottie';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } }; // Default to home page if no state is provided

    const successToast = () => toast.success('User Login Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    const errorToast = (errorMessage) => toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    //handle login
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        // console.log(email, password);

        //Sign in user
        signInUser(email, password)
            .then(() => {
                // console.log(result.user)
                successToast();
                navigate(from)

            })
            .catch(err => {
                errorToast(err.message);
            })
    }


    // Google Sign in
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                successToast()
                navigate(from)
                // console.log(res.user)
            })
            .catch(err => {
                errorToast(err.message);
                // console.log(err.message);
            });
    }

    // //Github Sign in 
    // const handleGithubSignIn = () => {
    //     signInWithGithub()
    //         .then(() => {
    //             successToast()
    //             navigate(from)
    //         })
    //         .catch(err => {
    //             errorToast(err.message);
    //         })
    // }


    // console.log(avaterImg)


    const avater = {
        loop: true,
        autoplay: true,
        animationData: avaterImg,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <ToastContainer />
            <Helmet>
                <title>Job Portal | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero">
                <div className="w-full lg:w-2/5 md:w-3/4 my-10">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 pb-8">
                        {/* <img src={avaterImg} alt="" /> */}
                        <Lottie
                            options={avater}
                            height={200}
                            width={200}
                        />
                        <h1 className='text-center text-2xl font-bold text-[#2847FF] mt-8'>Please Login</h1>

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <span className="btn bg-transparent border-none absolute top-9 right-0" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash className='text-2xl' /> : <FaRegEye className='text-2xl' />}</span>
                            </div>
                            <div className="form-control mt-6">

                                <input className='btn bg-[#2847FF] hover:bg-[#0a2ae1] text-white' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>New to Abrar Estate? Please <NavLink to="/register" className="font-[500] text-[#2847FF]">Register</NavLink></p>

                        <div>
                            <div className="flex flex-col w-full">
                                <div className="divider">OR</div>
                            </div>
                        </div>
                        <button onClick={handleGoogleLogin} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'>
                            {/* <FaGoogle /> */}
                            <img src={googleIcon} className='w-5' alt="" />
                            Signin with Google</button>
                        {/* <button onClick={handleGithubSignIn} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaGithub />
                            Signin with GitHub</button> */}



                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;