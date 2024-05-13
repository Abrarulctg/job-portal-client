import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateJob = () => {
    const job = useLoaderData();
    return (
        <div>
            update Job {job.job_title}
        </div>
    );
};

export default UpdateJob;