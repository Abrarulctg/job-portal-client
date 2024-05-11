import { Link, useRouteError } from 'react-router-dom';
import notFound from '../../assets/page_not_found.svg';
import errorImg from '../../assets/error.svg';
const NotFound = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='max-w-6xl mx-auto text-center'>
            <div className='flex justify-center'>
                {error.status === 404 ? <img className='max-w-96 w-auto ' src={notFound} alt="" /> : <img className='max-w-96 w-auto ' src={errorImg} alt="" />}
                {/* {error.status === 404 && <img className='max-w-96 w-auto ' src={notFound} alt="" />} */}
            </div>
            <h1 className='text-4xl my-4 text-[#2847FF] font-bold'>{error.statusText}</h1>
            <p>{error.data}</p>
            <p>{error.message}</p>
            <Link to="/" className='btn btn-success my-6'>Go to Home</Link>
        </div>
    );
};

export default NotFound;