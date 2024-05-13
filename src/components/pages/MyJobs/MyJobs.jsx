import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet";
import joBanner from '../../../assets/allJobBanner.jpeg';
import { MdOutlinePageview } from "react-icons/md";
import { FaPenNib } from 'react-icons/fa';
import { RiDeleteBin2Fill, RiDeleteBin2Line } from "react-icons/ri";


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const jobs = useLoaderData();

    const myJobs = jobs.filter(job => job.userEmail === user.email);
    console.log(myJobs)
    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Job Portal | My Jobs</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero rounded-xl w-full" style={{ backgroundImage: `url(${joBanner})` }}>
                <div className="hero-overlay bg-opacity-60 py-20 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center py-24'>My Jobs</h1>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                {
                    myJobs.length < 1
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
                                            myJobs.map((job, idx) =>
                                                <tr key={idx} className='hover rounded'>
                                                    <th>{idx + 1}</th>
                                                    <td>{job.job_title}</td>
                                                    <td className='text-center'>{job.posting_date}</td>
                                                    <td className='text-center'>{job.application_deadline}</td>
                                                    <td className='text-center'>{job.salary_range} <small>/Year</small> </td>
                                                    <td className='flex justify-center'>
                                                        <Link to={`/job/${job._id}`}><button className='btn btn-warning py-1 px-5 mr-2' title='View'><MdOutlinePageview /></button></Link>
                                                        {/* <Link to={`/updateJob/${job._id}`}>Update Job</Link> */}
                                                        <Link to={`/updateJob/${job._id}`}><button className='btn btn-warning' title='Update'><FaPenNib /></button></Link>
                                                        <button onClick={() => handleDelete(job._id)} className='btn btn-error text-white ml-2' title='Delete'><RiDeleteBin2Fill /></button>
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

export default MyJobs;