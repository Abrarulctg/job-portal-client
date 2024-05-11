import React, { useContext, useState } from 'react';
import { Helmet } from "react-helmet";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, user, saveUserProfileOnRegister } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);


    const successToast = () => toast.success('Congrats! Account created Successfully!', {
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

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if (password < 6) {
            errorToast("Password should be more than 6 digit!")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            errorToast("Your password should have at least one upper case characters.")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            errorToast("Your password should have at least one lower case characters.")
            return;
        }

        // console.log(name, photo, email, password)
        createUser(email, password, name, photo)
            .then(res => {
                // console.log(res.user)
                //Updating/setting user name and photo url
                saveUserProfileOnRegister(name, photo)
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        // setUser(res.user)
                        successToast();
                        setTimeout(() => {
                            navigate("/");
                        }, 1000);

                    })
                    .catch(err => {
                        errorToast(err.message);
                        // console.log(err.message)
                    })
            })
            .catch(err => {
                errorToast(err.message);
                // console.log(err.message)
            })
        // console.log(user.photoURL);



    }
    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Abrar Tourism | Register</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <ToastContainer />

            <div className="hero">
                <div className="w-full lg:w-2/5 md:w-3/4 my-10">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <h1 className='text-center text-2xl font-bold text-[#002366] mt-10'>Please Register</h1>

                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
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
                                <input className='btn btn-primary bg-[#2847FF]' type="submit" value="Register" />
                            </div>
                        </form>

                        <p className='text-center mb-6'>Already have an Account? Please <NavLink to="/login" className="font-[500] text-[#2847FF]">Login</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;