import React from "react";

const Jobs = ({ jobs }) => {
  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={index} className="py-5">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">
              {job.title} <span className="font-light">at</span> {job.company}
            </h2>
            <h3>
              {job.startDate} - {job.endDate}
            </h3>
          </div>
          <p>{job.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Jobs;
