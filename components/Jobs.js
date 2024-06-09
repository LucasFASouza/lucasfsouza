import React from "react";

const Jobs = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index}>
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
