import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JobCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Frontend Developer</h2>
                    <p className='text-end'>
                        By {"Abrarul Hoque"}
                    </p>
                    <p className="text-justify my-3">Join our team as a Frontend Developer. Craft captivating user experiences and bring designs to life. Apply now!</p>
                    <div className="text-start space-y-2">
                        <p>Posted On: {"12-05-2024"}</p>
                        <p>Application Deadline: {"20-05-2024"}</p>
                        <div className="flex flex-col lg:flex-row">
                            <p className="flex items-center"><FaPhoneVolume className="mr-2" /><a href="tel:01846112525">{"01846112525"}</a></p>
                            <p><span className="text-[#2847FF] font-bold">{"20000-25000"}</span>/Month</p>
                        </div>

                    </div>

                    <div className="card-actions justify-between my-5">
                        <Link to={`/jobs/id`}><button className="btn btn-primary bg-[#2847ff]">View Details</button></Link>
                        <button className="btn btn-outline btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;