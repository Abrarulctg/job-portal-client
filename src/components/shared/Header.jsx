import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';
// import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { themeChange } from 'theme-change'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [theme, setTheme] = useState("light");
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const handleSignOut = () => {
        logOut()
            .then(res => console.log("Sign Out Successful", res))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);


    const handleTheemToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }


    // const { theme, toggleTheme } = useContext(ThemeContext);

    // const toggleTheme = () => {
    //     if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    //         document.getElementById.classList.add("dark");
    //     }
    //     else {
    //         document.getElementById.classList.remove("dark");
    //     }
    //     if (localStorage.theme === "dark") {
    //         localStorage.theme = "light";
    //     }
    //     else {
    //         localStorage.theme = "dark";
    //     }
    // }

    const navLinks = <>
        <li className='mr-2'><NavLink to="/">Home</NavLink></li>
        <li className='mr-2'><NavLink to="/allJobs">All Jobs</NavLink></li>
        <li className='mr-2'><NavLink to="/myJobs">My Jobs</NavLink></li> {/* Conditional */}
        <li className='mr-2'><NavLink to="/appliedJobs">Applied Jobs</NavLink></li> {/* Conditional */}
        <li className='mr-2'><NavLink to="/postJob">Post a Job</NavLink></li> {/* Conditional */}
        <li className='mr-2'><NavLink to="/blogs">Blogs</NavLink></li>
    </>




    return (
        <div className='bg-base-100'>
            <div className='max-w-6xl mx-auto'>
                <div className="navbar ">
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

                        {/* theme toggler */}
                        <label className="cursor-pointer grid place-items-center mr-3">
                            <input type="checkbox" value="synthwave" onChange={handleTheemToggle} checked={theme === 'dark'} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
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
                                        {/* <Link to="/myAccount"><button className='mb-3 bg-[#AFC4DD] text-[#000] p-3 rounded-xl'>My Account</button></Link> */}
                                        <NavLink to="/userProfile" className='mb-3 bg-[#AFC4DD] text-[#000] p-3 rounded-xl'>User Profile</NavLink>

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
        </div>
    );
};

export default Header;