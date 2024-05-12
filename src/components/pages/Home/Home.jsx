import React from 'react';
import Header from '../../shared/Header';
import './Home.css';
import Banner from './Banner';
import jobBanner from '../../../assets/job-banner.gif';
import { Link } from 'react-router-dom';
import JobCategory from '../JobCategory';
import HowItWorks from './HowItWorks';
import Testimonial from '../../shared/Testimonial';
import Subscribe from '../../shared/Subscribe';
const Home = () => {
    return (
        <div className='max-w-6xl mx-auto my-5'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>

            {/* Recent Jobs*/}
            <div className='flex flex-col lg:flex-row gap-4 items-center my-12'>
                <div className='w-full lg:w-2/5'>
                    <img src={jobBanner} alt="" />
                </div>
                <div className='w-full lg:w-3/5 p-4 space-y-6'>
                    <p className='font-ubuntu text-[#2847FF]'>Recent Jobs</p>
                    <h1 className='text-3xl lg:text-5xl font-ubuntu font-extrabold '>Over all 1000+ Talented People Registered in Our Website</h1>
                    <p className='text-ubuntu'>
                        Join over 1000 talented individuals who have registered on our website. Don't miss out – sign up today and unlock endless opportunities!
                    </p>
                    <Link to='register'><button className='btn btn-primary bg-[#2847ff] my-8'>Join Now</button></Link>
                </div>


            </div>

            {/* Jobs Category */}
            <JobCategory></JobCategory>

            {/* client Testimonial */}
            <Testimonial></Testimonial>

            {/* Subscribe */}
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;