import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className='text-center my-14 space-y-4'>
                <p className='font-ubuntu text-[#2847FF]'>Subscribe</p>
                <h1 className='text-3xl lg:text-5xl font-ubuntu font-extrabold'>Stay in the Loop: Subscribe Now!</h1>
                <div className='flex justify-center'>
                    <p className='max-w-lg text-center'>
                        Stay updated! Subscribe to our newsletter for the latest job listings, industry insights, and career tips delivered straight to your inbox.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <label className="input input-bordered input-primary flex items-center gap-2 pr-0 max-w-xl mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="subscribe@domain.com" />
                        <button className='btn btn-primary bg-[#2847FF] lg:px-12'>Subscribe</button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;