import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from "react-helmet";
import joBanner from '../../../assets/allJobBanner.jpeg';
import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlinePageview } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const appliedAllJob = useLoaderData(); //fetching all applied jobs
    // console.log(appliedAllJob)

    const [matchedJob, setMatchedJob] = useState([]); // This page will display these job data

    const matchedJobWithUser = appliedAllJob.filter(job => job.appliedUser === user.email);
    // console.log(matchedJobWithUser)
    const [displayMatchedJobWithUser, setDisplayMatchedJobWithUser] = useState([]);


    useEffect(() => {
        fetch('https://job-portal-server-red.vercel.app/jobs') //fetching all job data 
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const matchedJobs = data.filter(job => {
                    return matchedJobWithUser.some(matchedJob => matchedJob.jobId === job._id);
                });
                setMatchedJob(matchedJobs);
                setDisplayMatchedJobWithUser(matchedJobs);
            })
    }, []);

    // useEffect(() => {
    //     fetch('https://job-portal-server-red.vercel.app/jobs') //fetching all job data 
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //             const matchedJobs = data.filter(job => {
    //                 if (jobCategoryFilter) {
    //                     return matchedJobWithUser.some(matchedJob.jobId === job._id && job.job_category === jobCategoryFilter);
    //                 } else {
    //                     return matchedJobWithUser.some(matchedJob => matchedJob.jobId === job._id);
    //                 }
    //             });
    //             setMatchedJob(matchedJobs);
    //         })
    //         .catch(err => {
    //             console.log("Error fetching job data:", err);
    //         })
    // }, [appliedAllJob, user.email, jobCategoryFilter]);

    const handleJobCategoryFilterChange = (category) => {
        if (category === "all") {
            setDisplayMatchedJobWithUser(matchedJob);
        }
        if (category === "On Site") {
            const onSiteJobs = matchedJob.filter(job => job.job_category === "On Site");
            console.log(onSiteJobs)
            setDisplayMatchedJobWithUser(onSiteJobs);
        }
        if (category === "Remote") {
            const remoteJobs = matchedJob.filter(job => job.job_category === "Remote");
            console.log(remoteJobs)
            setDisplayMatchedJobWithUser(remoteJobs);
        }
        if (category === "Part-Time") {
            const onSiteJobs = matchedJob.filter(job => job.job_category === "Part-Time");
            console.log(onSiteJobs)
            setDisplayMatchedJobWithUser(onSiteJobs);
        }


    }

    console.log("Showing full job data filtering from applied job and job", matchedJob)


    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>Job Portal | My Applied Jobs</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero rounded-xl w-full" style={{ backgroundImage: `url(${joBanner})` }}>
                <div className="hero-overlay bg-opacity-60 py-20 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-ubuntu font-bold text-center py-24'>My Applied Jobs</h1>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                {
                    matchedJob.length < 1
                        ?
                        <div className='text-center mb-5'>
                            <h1 className="text-3xl mb-5">You have not Applied any Jobs yet!</h1>
                            <Link to="/allJobs"><button className='btn btn-success'>Apply for a Job</button></Link>
                        </div>
                        :
                        <div>
                            <div className="overflow-x-auto mb-4">
                                {/* Filtering JobCategory */}
                                <div className="text-center mb-10">
                                    <div className="dropdown w-40">
                                        <div tabIndex={0} role="button" className="btn bg-[#2847ff] hover:bg-[#0a29da]  text-white font-semibold flex justify-between"><p>Filter Jobs By:</p> <IoIosArrowDown /></div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li onClick={() => handleJobCategoryFilterChange('all')} className="bg-white text-black"><button>All Categories</button></li>
                                            <li onClick={() => handleJobCategoryFilterChange('On Site')} className="bg-white text-black"><button>On Site</button></li>
                                            <li onClick={() => handleJobCategoryFilterChange('Remote')} className="bg-white text-black"><button>Remote</button></li>
                                            <li onClick={() => handleJobCategoryFilterChange('Part-Time')} className="bg-white text-black"><button>Part-Time</button></li>
                                        </ul>
                                    </div>
                                </div>


                                {/* Displaying filtered job Data */}
                                <table className="table mb-[100px]">
                                    {/* head */}
                                    <thead>
                                        <tr className='bg-[#b0c4dd9a] text-black text-center rounded-lg'>
                                            <th></th>
                                            <th>Job Title</th>
                                            <th>Job Posting Date</th>
                                            <th>Application Deadline</th>
                                            <th>Salary Range</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            displayMatchedJobWithUser.length === 0 ? <div><p className='text-red-500 text-center mb-10 text-xl'>{"No Data Found"}</p></div> : <>
                                                {
                                                    displayMatchedJobWithUser.map((job, idx) =>
                                                        <tr key={idx} className='hover rounded'>
                                                            <th>{idx + 1}</th>
                                                            <td>{job.job_title}</td>
                                                            <td className='text-center'>{job.posting_date}</td>
                                                            <td className='text-center'>{job.application_deadline}</td>
                                                            <td className='text-center'>{job.salary_range} <small>/Year</small> </td>
                                                            <td className='flex justify-center'>
                                                                <Link to={`/job/${job._id}`}><button className='btn btn-warning py-1 px-5 mr-2' title='View'><MdOutlinePageview /></button></Link>
                                                            </td>
                                                        </tr>)
                                                }
                                            </>
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

export default AppliedJobs;