import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const CourseList = () => {
  const courses = [
    {
      instructorImg: "https://randomuser.me/api/portraits/men/1.jpg",
      courseName: "React Fundamentals",
      rating: 4,
      enrolledStudents: "150,000",
      subscriptionFee: 49.99,
      totalHours: 20,
      dateUpdated: "2024-05-10",
      isBestseller: false,
    },
    {
      instructorImg: "https://randomuser.me/api/portraits/women/2.jpg",
      courseName: "Advanced React Techniques with jonas schmedtman",
      rating: 5,
      enrolledStudents: "2,000,000",
      subscriptionFee: 69.99,
      totalHours: 30,
      dateUpdated: "2024-05-09",
      isBestseller: true,
    },
  ];

  return (
    <div className=" w-3/4 p-3">
      {courses.map((course, index) => (
        <CourseListItem key={index} {...course} />
      ))}
    </div>
  );
};

const CourseListItem = ({
  courseName,
  rating,
  subscriptionFee,
  courses
}) => {

  return (
      <div className="flex items-center mb-4 border-b border-gray-400 w-full">
          <img
              src="https://source.unsplash.com/random/300x200?oop"
              alt="course image"
              className="w-40 h-28 mr-4 object-cover"
          />
          <div className="flex-1 flex justify-between mr-4 w-full">
              <div className="flex flex-col">
                  <div className="font-bold text-md text-wrap">
                      {courseName}
          </div>
          <p className="text-sm text-gray-900">short description of the course</p>
                  <div className="text-sm text-gray-400"> jonass schmedtman</div>
                  <div className="flex mr-4 text-gray-600">
                    <span className="text-bold me-3 text-black">
                        {rating}{" "}
                    </span>
                    <StarRatings
                        rating={rating}
                        starRatedColor="gold"
                        starDimension="12px"
                        starSpacing="0px"
                    />
                    <span>(1222)</span>
                  </div>
              </div>
              <div className="w-6 me-3 font-bold text-lg text-gray-600">
                  ${subscriptionFee}
              </div>
          </div>
      </div>
  );
};

export default CourseList;
