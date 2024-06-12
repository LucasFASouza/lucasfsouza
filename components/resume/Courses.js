import React from "react";

const Courses = ({ courses }) => {
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index} className="py-5">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">
              {course.title}
              <span className="text-[#FC3D6B] font-semibold"> @ </span>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FC3D6B] underline-transition cursor-pointer"
              >
                {course.institution}
              </a>
            </h2>
            <p>
              {course.startDate} - {course.endDate}
            </p>
          </div>
          <p>{course.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Courses;
