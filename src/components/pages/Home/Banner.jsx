import homeBanner from '../../../assets/home-banner.svg';

const Banner = () => {
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 p-6'>
                <div>
                    <h1 className='font-ubuntu text-2xl lg:text-5xl font-extrabold my-4'>Start building your own career now</h1>
                    <p className='font-ubuntu'>Welcome to the Job Portal, #1 location to search for a job of your dream. Use our search system to find the position you need.
                    </p>
                    <div className='my-8'>
                        <label className="input input-bordered input-primary flex items-center gap-2 pr-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search job title" />
                            <button className='btn btn-primary bg-[#2847FF] lg:px-12'>Search</button>
                        </label>
                    </div>
                </div>
                <div>
                    <img src={homeBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;