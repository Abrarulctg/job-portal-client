import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    const threeTestimonial = testimonial.slice(0, 3);

    useEffect(() => {
        fetch('/testimonial-data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTestimonial(data);
            })
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
    };

    return (
        <div>
            <div className='text-center my-14 space-y-4'>
                <p className='font-ubuntu text-[#2847FF]'>Client Testimonials</p>
                <h1 className='text-3xl lg:text-5xl font-ubuntu font-extrabold '>What a Job Holder Says About Us</h1>
                <div className='flex justify-center'>
                    <p className='max-w-lg text-center'>
                        Discover firsthand experiences! Hear directly from our employees about their journey with us, their roles, and what makes our workplace special
                    </p>
                </div>
            </div>
            <div className='px-4 lg:px-0 mt-24'>
                {/* Need to apply a slider */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        threeTestimonial.map((singleTestimonial, idx) => <div key={idx} className='relative bg-[#2848ff1f] rounded-xl p-4 text-center'>
                            <div className='mt-16 space-y-2'>
                                <img className='w-28 h-28 rounded-full absolute -top-10 left-[40%] border-8 border-white' src={singleTestimonial.photo} alt="" />
                                <h1 className='text-2xl font-semibold font-ubuntu'>{singleTestimonial.employee_name}</h1>
                                <p className='text-[#2847ff]'> {singleTestimonial.duration_with_us} with us</p>
                                <p>{singleTestimonial.testimonial}</p>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Testimonial;