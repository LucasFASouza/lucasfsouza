import React from "react";

const Jobs = ({ jobs }) => {
  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={index} className="py-5">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">
              {job.title}
              <span className="text-[#FC3D6B] font-semibold"> @ </span>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FC3D6B] underline-transition cursor-pointer"
              >
                {job.company}
              </a>
            </h2>
            <p>
              {job.startDate} {job.endDate && <span>- {job.endDate}</span>}
            </p>
          </div>
          <p>{job.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Jobs;
