import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const JobDetails = () => {
    const job = useLoaderData();
    const { user } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [appliedJobsData, setAppliedJobsData] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-red.vercel.app/appliedJobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppliedJobsData(data);
            })
    }, []);

    const { _id, job_title, job_banner, job_category, salary_range, job_description, job_responsibilities, why_work_with_us, posting_date, application_deadline, applicants_number, userEmail } = job;



    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedCurrentDate = `${month}/${day}/${year}`;

    // console.log(currentDate)
    // console.log(formattedCurrentDate)

    const successToast = (successMessage) => toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    const errorToast = (errorMessage) => toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });



    const handleApplyJob = e => {
        e.preventDefault();

        const formattedCurrentDate = currentDate.toLocaleDateString("en-US");
        const applicationDeadline = new Date(application_deadline).toLocaleDateString("en-US");

        console.log(formattedCurrentDate)
        console.log(applicationDeadline)

        if (new Date(formattedCurrentDate) > new Date(application_deadline)) {
            setErrorMessage("Application deadline has expired!");
            setTimeout(() => {
                setErrorMessage("");
            }, 5000)
            return
        }
        if (user.email === userEmail) {
            setErrorMessage("You cannot apply to your Own Job");
            setTimeout(() => {
                setErrorMessage("");
            }, 5000)
            return
        }

        const form = e.target;
        const resumeLink = form.resumeLink.value;
        const jobId = _id;
        const appliedUser = user.email;

        if (resumeLink === "") {
            errorToast("Please provide a Resume Link!");
            return;
        }
        const appliedJob = { jobId, job_title, appliedUser, resumeLink }
        console.log(appliedJob)

        //Send data to the server
        // fetch('https://job-portal-server-red.vercel.app/appliedJobs', {
        fetch('https://job-portal-server-red.vercel.app/applyJob', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedJob)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    successToast("Applied Successfully! Redirecting to all Jobpage");
                    setTimeout(() => {
                        navigate("/allJobs");
                    }, 5000);
                }
                else {
                    errorToast("Application Failed!")
                }
            })
            .catch(() => {
                errorToast("Something went Wrong!")
            })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <ToastContainer />

            <Helmet>
                <title>Job Portal | {job_title}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>


            <div className="hero" style={{ backgroundImage: `url(${job_banner || "https://i.ibb.co/DCTynTM/all-Job-Banner.jpg"})` }}>
                <div className="hero-overlay bg-opacity-60 py-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-ubuntu font-bold text-center py-24'>Job Details</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row my-8 gap-4">
                <div className="w-full lg:w-1/3">
                    <img src={job_banner} alt="" className="rounded-xl" />
                    <div>
                        <h1 className="text-xl font-bold my-6 font-ubuntu">Job Details</h1>
                        <div className="space-y-3">
                            <p><span className="text-gray-600 font-bold">Salary:</span> {salary_range}/Year</p>
                            <p><span className="text-gray-600 font-bold">Posted On:</span> {posting_date}</p>
                            <p><span className="text-gray-600 font-bold">Job Type:</span> {job_category}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <h1 className="text-4xl font-bold mb-4 font-ubuntu">{job_title}</h1>
                    <div className="flex flex-row justify-between ">
                        <p><span className="text-gray-800 font-bold">Deadline: </span> {application_deadline}</p>
                        <p><span className="text-gray-800 font-bold">Applicants: </span> {applicants_number}</p>
                    </div>
                    <p className="my-2 text-justify">{job_description}</p>
                    <div>
                        <h1 className="text-xl font-bold mt-4 font-ubuntu">Job Responsibilities</h1>
                        <p className="my-2 text-justify">{job_responsibilities}</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mt-4 font-ubuntu">Why you Work with us</h1>
                        <p className="my-2 text-justify">{why_work_with_us}</p>
                    </div>
                    <button className="btn bg-[#2847ff] hover:bg-[#122fd2] text-white my-6" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply this Job</button>
                </div>

            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-600">✕</button>
                    </form>
                    <h3 className="font-bold text-lg"><span className="font-semibold">Apply for</span> {job_title}</h3>
                    <p className="py-4">Application Deadline: {application_deadline}</p>
                    <div>
                        <form onSubmit={handleApplyJob}>
                            <label className="form-control w-full">
                                <div className="label" disabled>
                                    <span className="label-text">Your name</span>
                                </div>
                                <input type="text" name="name" defaultValue={user.displayName} placeholder="Your name" className="input input-bordered w-full" disabled />
                            </label>
                            <label className="form-control w-full">
                                <div className="label" disabled>
                                    <span className="label-text">Your Email</span>
                                </div>
                                <input type="email" name="email" defaultValue={user.email} placeholder="Your email" className="input input-bordered w-full" disabled />
                            </label>
                            <label className="form-control w-full">
                                <div className="label" >
                                    <span className="label-text">Your Resume Link</span>
                                </div>
                                <input type="text" name="resumeLink" placeholder="Enter your Resume Link" className="input input-bordered w-full" />
                            </label>

                            <input type="submit" className="btn bg-[#2847ff] hover:bg-[#122fd2] text-white my-6" value="Apply" />
                            <span className="text-red-500 ml-4">{errorMessage}</span>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JobDetails;