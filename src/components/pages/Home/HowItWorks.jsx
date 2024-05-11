import React from 'react';
import { FaChevronCircleRight, FaSearch, FaUserEdit, FaUserPlus } from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className='text-center space-y-4'>
            <p className='font-ubuntu text-[#2847FF]'>How it works</p>
            <h1 className='text-3xl lg:text-5xl font-ubuntu font-extrabold '>Follow Easy Four Steps</h1>
            <div className='flex justify-center'>
                <p className='max-w-lg text-center'>
                    Discover your dream job with ease on job-portal-abrar. Just follow our simple four-step process: Sign up, Explore, Apply, and Track. Your next career move is just a few clicks away!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="shadow-lg rounded p-6 how-it-work-card">
                    <div className='flex justify-center searchIcon mx-auto bg-[#2847FF] p-6 w-16 rounded-xl'>
                        <FaSearch className='' />
                    </div>
                    <h1 className='text-2xl font-bold'>Search Job</h1>
                    <p>The standard chunk of used below of those interested</p>
                </div>
                <div className="shadow-lg rounded p-6 how-it-work-card">
                    <div className='flex justify-center searchIcon mx-auto bg-[#2847FF] p-6 w-16 rounded-xl'>
                        <ImProfile />
                    </div>
                    <h1 className='text-2xl font-bold'>Search Job</h1>
                    <p>The standard chunk of used below of those interested</p>
                </div>
                <div className="shadow-lg rounded p-6 how-it-work-card">
                    <div className='flex justify-center searchIcon mx-auto bg-[#2847FF] p-6 w-16 rounded-xl'>
                        <FaUserPlus />
                    </div>
                    <h1 className='text-2xl font-bold'>Search Job</h1>
                    <p>The standard chunk of used below of those interested</p>
                </div>
                <div className="shadow-lg rounded p-6 how-it-work-card">
                    <div className='flex justify-center searchIcon mx-auto bg-[#2847FF] p-6 w-16 rounded-xl'>
                        <FaChevronCircleRight />
                    </div>
                    <h1 className='text-2xl font-bold'>Search Job</h1>
                    <p>The standard chunk of used below of those interested</p>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;