import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allJobs">All Jobs</NavLink></li>
        <li><NavLink to="/myJobs">My Jobs</NavLink></li> {/* Conditional */}
        <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li> {/* Conditional */}
        <li><NavLink to="/addJob">Add a Job</NavLink></li> {/* Conditional */}
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/userProfile">User Profile</NavLink></li>
    </>
    return (
        <div>
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
                    <NavLink to="/">Job Portal</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;