import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";

const Login = () => {
    return (
        <div >
            <ToastContainer />

            <Helmet>
                <title>Job Portal | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero">
                <div className="w-full lg:w-2/5 md:w-3/4 my-10">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 pb-8">
                        <h1 className='text-center text-2xl font-bold text-[#002366] mt-8'>Please Login</h1>

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

                                <input className='btn bg-[#0B274E] hover:bg-[#082651] text-white' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>New to Abrar Estate? Please <NavLink to="/register" className="font-[500] text-purple-950">Register</NavLink></p>
                        {/* <button onClick={handleGoogleLogin} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaGoogle />
                            Signin with Google</button>
                        <button onClick={handleGithubSignIn} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaGithub />
                            Signin with GitHub</button>
                        <button onClick={handleTwitterLogin} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaTwitter />
                            Signin with Twitter</button>
                        <button onClick={handleFacebookLogin} className='btn btn-ghost border border-[#002366] font-bold hover:text-white hover:bg-[#002366] mx-10 my-2'><FaFacebook />
                            Signin with Facebook</button> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;