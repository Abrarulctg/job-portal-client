import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './Home/JobCard';
import { useLoaderData } from 'react-router-dom';


const JobCategory = () => {
    const jobs = useLoaderData();
    console.log(jobs)

    const onSiteJob = jobs.filter(job => job.job_category === "On Site");
    const remoteJob = jobs.filter(job => job.job_category === "Remote");
    const hybridJob = jobs.filter(job => job.job_category === "Hybrid")
    const partTimeJob = jobs.filter(job => job.job_category === "Part-Time");
    console.log(onSiteJob)

    return (
        <div className='text-center space-y-4' id="jobsCategory">
            <p className='font-ubuntu text-[#2847FF]'>Jobs Category</p>
            <h1 className='text-3xl lg:text-5xl font-ubuntu font-extrabold '>Choose Your Desired Category</h1>
            <div className='flex justify-center'>
                <p className='max-w-lg text-center'>
                    Select your preferred category effortlessly. Explore diverse options tailored to your interests and expertise.</p>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid Job</Tab>
                        <Tab>Part-Time Job</Tab>
                    </TabList>

                    {/* panel for remote job */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                            {
                                onSiteJob.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    {/* panel for remote job */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                            {
                                remoteJob.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    {/* panel for hybrid job */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                            {
                                hybridJob.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    {/* panel for part time job */}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
                            {
                                partTimeJob.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default JobCategory;