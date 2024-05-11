import React, { useContext, useState } from 'react';
import { Helmet } from "react-helmet";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../AuthProvider/AuthProvider';

const UserProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    // console.log(user)
    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("")

    const handleNameChange = e => {
        // e.preventDefault();
        setName(e.target.value);
    }
    const handlePhotoChange = e => {
        setPhotoUrl(e.target.value);
    }

    const successToast = () => toast.success('Congrats! Account updated Successfully!', {
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

    //updating profile
    const handleUpdate = e => {
        e.preventDefault();
        // const form = new FormData();
        // const name = form.get('name');
        // const photo = form.get('photo');
        // console.log(name, photoUrl);
        updateProfile(user, {
            displayName: name, photoURL: photoUrl
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoUrl })
                successToast();
                // e.form.reset();
                setName("");
                setPhotoUrl("");
            })
            .catch(error => errorToast(error.message))
    }
    return (
        <div>
            <ToastContainer />

            <Helmet>
                <title>Abrar Tourism | User Profile</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='max-w-6xl mx-auto '>
                <h1 className="text-3xl text-center text-[#002366] font-bold mt-10">User Profile</h1>

                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='w-full md:w-full lg:w-2/4 md:mx-2 lg:mx-auto rounded-xl my-8 p-6 lg:py-20 bg-[#0024660b]' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                        data-aos-duration="1000">
                        <div className=' items-center'>
                            <img className='w-[200px] h-[200px] mx-auto rounded-full p-6' src={user?.photoURL || "https://i.ibb.co/XX4DwkF/default-user.webps"} alt="" />
                            <div className='w-full space-y-3 bg-white p-10 rounded-xl'>
                                <h1 className="text-xl font-semibold text-[#002366]"> Name : {user?.displayName || "User Name Not Found"}</h1>
                                <hr />
                                <h1 className="text-xl font-semibold text-[#002366]">Email : {user?.email || "Email not Found"}</h1>
                                {/* <p>Account Created on: {user.metadata.creationTime}</p>
                                <p>Last SignIn Time : {user.metadata.lastSignInTime}</p> */}

                            </div>
                        </div>
                    </div>


                    {/* //Update profile  */}
                    <div className='w-full md:w-full lg:w-2/4 md:mx-2 lg:mx-auto rounded-xl my-8 p-6 lg:py-20 bg-[#0024660b]'>
                        <h1 className="text-3xl text-center text-[#002366] font-bold my-8">Update Profile</h1>

                        <div className=' items-center'>
                            <div className='w-full lg:w-full space-y-3 bg-white p-10 rounded-xl' data-aos="flip-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                                data-aos-duration="3000" >
                                <form onSubmit={handleUpdate} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" value={name} onChange={handleNameChange} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" value={photoUrl} onChange={handlePhotoChange} />
                                    </div>

                                    <div className="form-control mt-6">
                                        <input className='btn btn-primary' type="submit" value="Save Profile" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;