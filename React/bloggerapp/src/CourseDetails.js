import React from 'react';

const CourseDetails = ({ courses }) => {
  if (!courses || courses.length === 0) return null;

  return (
    <div>
      <h2>🎓 Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.duration} months
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
