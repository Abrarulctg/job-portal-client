import { useLoaderData, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateJob = () => {
    const job = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { job_banner, job_title, job_category, job_description, job_responsibilities, why_work_with_us, application_deadline, posting_date, salary_range } = job;

    const [startDate, setStartDate] = useState(posting_date);
    const [endDate, setEndDate] = useState(application_deadline);

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



    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const job_banner = form.job_banner.value;
        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const job_description = form.job_description.value;
        const job_responsibilities = form.job_responsibilities.value;
        const why_work_with_us = form.why_work_with_us.value;
        const posting_date = form.posting_date.value;
        const application_deadline = form.application_deadline.value;
        const salary_range = form.salary_range.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const updatedJob = { job_banner, job_title, job_category, job_description, job_responsibilities, why_work_with_us, application_deadline, posting_date, salary_range, userEmail, userName }
        console.log(updatedJob)

        // validation
        if (job_banner === "") {
            errorToast("Job Banner Field cannot be blank!");
            return;
        }
        if (job_title === "") {
            errorToast("Job Title cannot be blank!");
            return;
        }
        if (job_category === "") {
            errorToast("Job Category Field cannot be blank!");
            return;
        }
        if (job_description === "") {
            errorToast("job_description Field cannot be blank!");
            return;
        }

        if (job_responsibilities === "") {
            errorToast("Bob Responsibilities cannot be blank!");
            return;
        }
        if (why_work_with_us === "") {
            errorToast("why_work_with_us field cannot be blank!");
            return;
        }
        if (posting_date === "") {
            errorToast("Please select Posting date!");
            return;
        }
        if (application_deadline === "") {
            errorToast("Please select Application Deadline!");
            return;
        }
        if (salary_range === "") {
            errorToast("Please enter Salary Information!");
            return;
        }


        //send data to server
        fetch(`https://job-portal-server-red.vercel.app/job/${job._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Job has been updated!",
                        icon: "success"
                    })
                    form.reset();
                    navigate('/myJobs')

                }
                else {
                    errorToast("Job Update Failed!")
                }
            })
            .catch(() => {
                errorToast("Something went Wrong!")
            })
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <ToastContainer />
            <Helmet>
                <title>Job Portal | Update Job</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className='bg-[#2848ff29] text-2xl md:text-3xl lg:text-5xl font-bold text-center py-20 font-ubuntu'>Update Job </h1>
            <div className='mt-10'>
                <form onSubmit={handleSubmit}>
                    {/* form row  |  job_banner URL */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="job_banner" defaultValue={job_banner} className="w-full" placeholder="Job Banner URL" />
                        </label>

                    </div>
                    {/* form row || Job Title and Job job_category*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="job_title" defaultValue={job_title} className="w-full" placeholder="Job Title" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="job_category" defaultValue={job_category} className="grow" placeholder="Job Category Name" />
                        </label>

                    </div>
                    {/* form row || job_description  */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="job_description" defaultValue={job_description} className="grow" placeholder="Job Description" />
                        </label>

                    </div>
                    {/* form row || job_responsibilities */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="job_responsibilities" defaultValue={job_responsibilities} className="grow" placeholder="job_responsibilities" />
                        </label>
                    </div>
                    {/* form row || why_work_with_us*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="why_work_with_us" defaultValue={why_work_with_us} className="grow" placeholder="why_work_with_us" />
                        </label>
                    </div>
                    {/* form row || Posting date and application_deadline*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            {/* <input type="date" name="posting_date" className="grow" placeholder="Posting Date" /> */}
                            <DatePicker name="posting_date" defaultValue={posting_date} className='grow' selected={startDate} onChange={(date) => setStartDate(date)} />

                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            {/* <input type="date" name="application_deadline" className="grow" placeholder="Application Deadline" /> */}
                            <DatePicker name="application_deadline" defaultValue={application_deadline} className='grow' selected={endDate} onChange={(date) => setEndDate(date)} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="text" name="salary_range" defaultValue={salary_range} className="grow" placeholder="Salary Range" />
                        </label>
                    </div>

                    {/* form row || ApplicantsNumber, user Email and User Name*/}
                    <div className="md:flex gap-4">

                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3" disabled>
                            <input type="email" name="userEmail" className="grow" defaultValue={user?.email} placeholder="User Email" disabled />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3" disabled>
                            <input type="text" name="userName" className="grow" defaultValue={user?.displayName} placeholder="User Name" disabled />
                        </label>
                    </div>
                    <input className='btn btn-outline w-full bg-[#2847ff] hover:bg-[#0f27b2] text-white mb-5' type="submit" value="Update Job" />

                </form>
            </div>
        </div>
    );
};

export default UpdateJob;