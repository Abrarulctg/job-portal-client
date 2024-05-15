import { Helmet } from "react-helmet";
import joBanner from '../../../assets/allJobBanner.jpeg';
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>Job Portal | Blogs</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero rounded-xl" style={{ backgroundImage: `url(${joBanner})` }}>
                <div className="hero-overlay bg-opacity-60 py-20 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className=' text-2xl md:text-3xl lg:text-5xl font-ubuntu font-bold text-center py-24'>Blogs</h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/PZb9pBf/BPJjA.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#4a66ff]">What is an access token and refresh token? How do they work and where should we store them on the client side?</h2>
                        <p>
                            Access tokens and refresh tokens are integral components of modern authentication mechanisms used in web applications and APIs. They play a crucial role in securely managing user authentication and authorization processes, ensuring that only authenticated users can access protected resources.
                        </p>
                        <div className="card-actions justify-center my-2">
                            <Link to="/TokenBlog"><button className="btn btn-primary">Read more</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/82jsS0w/1686391647921.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#4a66ff]">What is ExpressJS and NestJS?</h2>
                        <p>
                            Express.js, also known as Express, stands as a minimalistic and flexible web application framework designed for Node.js. It provides a rich set of functionalities for constructing web applications and APIs. With Express, developers gain access to a powerful toolkit that facilitates the handling of HTTP requests and responses, middleware configuration for customizing server behavior, and routing for managing application endpoints.
                        </p>
                        <div className="card-actions justify-center">
                            <Link to="/expressNest"><button className="btn btn-primary">Read more</button></Link>
                            {/* <button className="btn btn-primary">Read more</button> */}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;