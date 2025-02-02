import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet";
import joBanner from '../../../assets/allJobBanner.jpeg';
import { MdOutlinePageview } from "react-icons/md";
import { FaPenNib } from 'react-icons/fa';
import { RiDeleteBin2Fill, RiDeleteBin2Line } from "react-icons/ri";
import Swal from 'sweetalert2';


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const jobs = useLoaderData();

    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-red.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const myJobs = jobs.filter(job => job.userEmail === user.email);
                setMyJobs(myJobs)
            })
    }, []);


    // const myJobs = jobs.filter(job => job.userEmail === user.email);
    // console.log(myJobs)


    const handleDelete = e => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://job-portal-server-red.vercel.app/job/${e}`, {
                        method: "DELETE"
                    }).then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Job has been DeleteD.",
                                    icon: "success"
                                });
                                const remainingJob = myJobs.filter(job => job._id !== e);
                                setMyJobs(remainingJob);
                            }
                        })
                }
            });
    }
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
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-ubuntu font-bold text-center py-24'>My Jobs</h1>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                {
                    myJobs.length < 1
                        ?
                        <div className='text-center mb-5'>
                            <h1 className="text-3xl mb-5">You have not Posted any Jobs yet!</h1>
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
                                            <th>Actions</th>
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