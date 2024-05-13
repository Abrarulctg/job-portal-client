import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job)
    const { job_title, job_banner, job_category, salary_range, job_description, job_responsibilities, why_work_with_us, posting_date, application_deadline, applicants_number } = job;

    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Job Portal | {job_title}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>


            <div className="hero" style={{ backgroundImage: `url(${job_banner || "https://i.ibb.co/DCTynTM/all-Job-Banner.jpg"})` }}>
                <div className="hero-overlay bg-opacity-60 py-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center py-24'>Job Details</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row my-8 gap-4">
                <div className="w-full lg:w-1/3">
                    <img src={job_banner} alt="" className="rounded-xl" />
                    <div>
                        <h1 className="text-2xl font-bold my-6">Job Details</h1>
                        <div className="space-y-3">
                            <p><span className="text-gray-600 font-bold">Salary:</span> {salary_range}/Year</p>
                            <p><span className="text-gray-600 font-bold">Posted On:</span> {posting_date}</p>
                            <p><span className="text-gray-600 font-bold">Job Type:</span> {job_category}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">{job_title}</h1>
                    <div className="flex flex-row justify-between ">
                        <p><span className="text-gray-700 font-bold">Deadline: </span> {application_deadline}</p>
                        <p><span className="text-gray-600 font-bold">Applicants: </span> {applicants_number}</p>
                    </div>
                    <p className="my-2 text-justify">{job_description}</p>
                    <div>
                        <h1 className="text-xl font-bold mt-4">Job Responsibilities</h1>
                        <p className="my-2 text-justify">{job_responsibilities}</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mt-4">Why you Work with us</h1>
                        <p className="my-2 text-justify">{why_work_with_us}</p>
                    </div>
                    <button className="btn bg-[#2847ff] hover:bg-[#122fd2] text-white my-6 ">Apply this JOb</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;