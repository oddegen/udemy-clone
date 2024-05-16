import React, { useState } from "react";
// import StarIcon from "@mui/icons-material/Star";
// import PeopleIcon from "@mui/icons-material/People";
// import FavoriteIcon from "@mui/icons-material/Favorite";

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
      courseName: "Advanced React Techniques",
      rating: 5,
      enrolledStudents: "2,000,000",
      subscriptionFee: 69.99,
      totalHours: 30,
      dateUpdated: "2024-05-09",
      isBestseller: true,
    },
  ];

  return (
    <div className="p-6">
      {courses.map((course, index) => (
        <CourseListItem key={index} {...course} />
      ))}
    </div>
  );
};

const CourseListItem = ({
  instructorImg,
  courseName,
  rating,
  enrolledStudents,
  subscriptionFee,
  totalHours,
  dateUpdated,
  isBestseller,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex items-center mb-4 p-4 border border-gray-300 rounded-lg">
      <img
        src={instructorImg}
        alt="Instructor"
        className="w-36 h-36 mr-4 object-cover"
      />
      <div className="flex-1 mr-4">
        <div className="mb-2 font-bold text-lg">{courseName}</div>
        <div className="text-gray-600 text-sm mb-2">
          {isBestseller && (
            <span className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">
              Bestseller
            </span>
          )}
          <span>
            &bull; {totalHours} Hours &bull; Updated: {dateUpdated}
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4 text-gray-600">
            {/* <StarIcon className="text-yellow-500 mr-1" /> */}
            <span>{rating}/5</span>
          </div>
          <div className="flex items-center mr-4 text-gray-600">
            {/* <PeopleIcon className="mr-1" /> */}
            <span>{enrolledStudents}</span>
          </div>
        </div>
      </div>
      <div className="font-bold text-lg text-gray-600 mr-8">
        ${subscriptionFee}
      </div>
      <div
        className="relative w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
        onClick={toggleFavorite}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${
            isFavorite ? "text-red-500" : "text-gray-300"
          }`}
        >
          {/* <FavoriteIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
