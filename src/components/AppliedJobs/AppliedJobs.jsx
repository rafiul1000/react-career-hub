import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => )
        }
    }, [])
    return (
        <div>
            <h2>Jobs i applied</h2>
        </div>
    );
};

export default AppliedJobs;