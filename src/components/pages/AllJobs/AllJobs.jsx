import { useLoaderData } from 'react-router-dom';
import joBanner from '../../../assets/allJobBanner.jpeg';
import { Helmet } from "react-helmet";
import JobCard from '../Home/JobCard';

const AllJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Job Portal | All Jobs</title>
                <meta name="description" content="Helmet application" />
            </Helmet>


            <div className="hero" style={{ backgroundImage: `url(${joBanner})` }}>
                <div className="hero-overlay bg-opacity-60 py-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center py-24'>All Jobs</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-xl mx-auto my-10">
                <label className="input input-bordered input-primary flex items-center gap-2 pr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="text" className="grow" placeholder="Search job title" />
                    <button className='btn btn-primary bg-[#2847FF] lg:px-12'>Search</button>
                </label>
            </div>

            {/* All Jobs Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 justify-items-center'>
                {
                    jobs.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;