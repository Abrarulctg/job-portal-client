import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Header = () => {
    const { user } = useContext(AuthContext)
    const navLinks = <>
        <li className='mr-2'><NavLink to="/">Home</NavLink></li>
        <li className='mr-2'><NavLink to="/allJobs">All Jobs</NavLink></li>
        <li className='mr-2'><NavLink to="/myJobs">My Jobs</NavLink></li> {/* Conditional */}
        <li className='mr-2'><NavLink to="/appliedJobs">Applied Jobs</NavLink></li> {/* Conditional */}
        <li className='mr-2'><NavLink to="/addJob">Add a Job</NavLink></li> {/* Conditional */}
        <li className='mr-2'><NavLink to="/blogs">Blogs</NavLink></li>
        <li className='mr-2'><NavLink to="/userProfile">User Profile</NavLink></li>
    </>


    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl font-extrabold">Job <span className="text-[#2847FF]">Portal</span> </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <>
                        <div>
                            <a id="clickable">
                                <div className='w-10 h-10'>
                                    <img className='rounded-full w-16 h-10 mr-2 bg-white p-1 border border-red-400' src={user.photoURL || "https://i.ibb.co/XX4DwkF/default-user.webps"} alt="" />
                                </div>
                            </a>
                            {/* bg-[#AFC4DD] */}
                            <Tooltip className='z-9999' anchorSelect="#clickable" clickable>
                                <div className='flex flex-col'>
                                    <p className='mb-3  text-[#ff9123] font-bold p-3 rounded-xl'>{user.displayName}</p>
                                    <Link to="/addTouristSpot"><button className='mb-3 btn btn-info text-[#000] p-3 rounded-xl'>Add Tourist Spot</button></Link>
                                    <Link to="/myAccount"><button className='mb-3 bg-[#AFC4DD] text-[#000] p-3 rounded-xl'>My Account</button></Link>
                                    <button onClick={handleSignOut} className='mb-3 btn btn-success text-[#000] p-3 rounded-xl'>Logout</button>
                                </div>
                            </Tooltip>
                        </div>
                    </>
                        : <>
                            <Link className='btn btn-success text-white' to="/login">Login</Link>
                            <Link className='btn btn-success text-white ml-4' to="/register">Register</Link>
                        </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;