import { Link, useLoaderData } from 'react-router-dom';
import joBanner from '../../../assets/allJobBanner.jpeg';
import { Helmet } from "react-helmet";
import { MdOutlinePageview } from "react-icons/md";

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
                {/* {
                    jobs.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                } */}
            </div>
            <div>
                {
                    jobs.length < 1
                        ?
                        <div className='text-center mb-5'>
                            <h1 className="text-3xl mb-5">You have not added any Jobs yet!</h1>
                            <Link to="/postJob"><button className='btn btn-success'>Post a Job</button></Link>
                        </div>
                        :
                        <div>
                            <div className="overflow-x-auto mb-4">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className='bg-[#b0c4dd9a] text-black text-center rounded-lg'>
                                            <th></th>
                                            <th>Job Title</th>
                                            <th>Job Posting Date</th>
                                            <th>Application Deadline</th>
                                            <th>Salary Range</th>
                                            <th>View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            jobs.map((job, idx) =>
                                                <tr key={idx} className='hover rounded'>
                                                    <th>{idx + 1}</th>
                                                    <td>{job.job_title}</td>
                                                    <td>{job.posting_date}</td>
                                                    <td>{job.application_deadline}</td>
                                                    <td>{job.salary_range} <small>/Year</small> </td>
                                                    <td>
                                                        <Link to={`/job/${job._id}`}><button className='btn btn-warning py-1 px-5 mr-2' title='View'><MdOutlinePageview /></button></Link>
                                                    </td>
                                                </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default AllJobs;