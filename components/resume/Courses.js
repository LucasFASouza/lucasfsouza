import React from "react";

const Courses = ({ courses }) => {
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index} className="py-5">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">
              {course.title} <span className="font-light">at</span>
              {course.institution}
            </h2>
            <h3>
              {course.startDate} - {course.endDate}
            </h3>
          </div>
          <p>{course.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Courses;
