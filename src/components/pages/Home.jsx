import React from 'react';
import Header from '../shared/Header';
import './Home.css';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import jobBanner from '../../assets/job-banner.gif';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='max-w-6xl mx-auto my-5'>
            <Banner></Banner>

        </div>
    );
};

export default Home;