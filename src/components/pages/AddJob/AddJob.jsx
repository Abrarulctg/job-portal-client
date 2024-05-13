import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddJob = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
        const applicants_number = form.applicants_number.value;
        const salaryRange = form.salaryRange.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const newJob = { job_banner, job_title, job_category, job_description, job_responsibilities, why_work_with_us, application_deadline, posting_date, applicants_number, salaryRange, userEmail, userName }
        console.log(newJob)

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
        if (salaryRange === "") {
            errorToast("Please enter Salary Information!");
            return;
        }


        //send data to server
        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    successToast("Job Posted Successfully!")
                    form.reset();
                }
                else {
                    errorToast("Job Post Failed!")
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
                <title>Job Portal | Post a Job</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className='bg-[#2848ff29] text-2xl md:text-3xl lg:text-5xl font-bold text-center py-20'>Post a job</h1>
            <div className='mt-10'>
                <form onSubmit={handleSubmit}>
                    {/* form row  |  job_banner URL */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="job_banner" className="w-full" placeholder="Job Banner URL" />
                        </label>

                    </div>
                    {/* form row || Job Title and Job job_category*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="job_title" className="w-full" placeholder="Job Title" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/2">
                            <input type="text" name="job_category" className="grow" placeholder="Job Category Name" />
                        </label>

                    </div>
                    {/* form row || job_description  */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="job_description" className="grow" placeholder="Job Description" />
                        </label>

                    </div>
                    {/* form row || job_responsibilities */}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="job_responsibilities" className="grow" placeholder="job_responsibilities" />
                        </label>
                    </div>
                    {/* form row || why_work_with_us*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll w-full">
                            <input type="text" name="why_work_with_us" className="grow" placeholder="why_work_with_us" />
                        </label>

                    </div>
                    {/* form row || Posting date and application_deadline*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            {/* <input type="date" name="posting_date" className="grow" placeholder="Posting Date" /> */}
                            <DatePicker name="posting_date" className='grow' selected={startDate} onChange={(date) => setStartDate(date)} />

                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            {/* <input type="date" name="application_deadline" className="grow" placeholder="Application Deadline" /> */}
                            <DatePicker name="application_deadline" className='grow' selected={endDate} onChange={(date) => setEndDate(date)} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="text" name="salaryRange" className="grow" placeholder="Salary Range" />
                        </label>
                    </div>

                    {/* form row || ApplicantsNumber, user Email and User Name*/}
                    <div className="md:flex gap-4">
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3">
                            <input type="number" name="applicants_number" className="grow" defaultValue="0" placeholder="Applicants Number" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3" disabled>
                            <input type="email" name="userEmail" className="grow" defaultValue={user?.email} placeholder="User Email" disabled />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4 form-controll md:w-1/3" disabled>
                            <input type="text" name="userName" className="grow" defaultValue={user?.displayName} placeholder="User Name" disabled />
                        </label>
                    </div>
                    <input className='btn btn-outline w-full bg-[#2847ff] hover:bg-[#0f27b2] text-white mb-5' type="submit" value="Post Job" />

                </form>
            </div>
        </div>
    );
};

export default AddJob;