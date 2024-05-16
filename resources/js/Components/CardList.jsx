import React from "react";
// import StarIcon from "@mui/icons-material/Star";

const sampleCourses = [
  {
    id: 1,
    title: "React Full Course",
    instructor: "John Doe",
    rating: 4.5,
    fee: 49.99,
    bestseller: true,
    students: 1200,
    imageUrl: "https://source.unsplash.com/random/300x200?react",
  },
  {
    id: 2,
    title: "JS Full Course",
    instructor: "Jane Smith",
    rating: 4.7,
    fee: 39.99,
    bestseller: true,
    students: 1500,
    imageUrl: "https://source.unsplash.com/random/300x200?javascript",
  },
  {
    id: 4,
    title: "Advanced Java",
    instructor: "Mike Adams",
    rating: 4.8,
    fee: 69.99,
    bestseller: true,
    students: 1800,
    imageUrl: "https://source.unsplash.com/random/300x200?java",
  },
  {
    id: 5,
    title: "Object Oriented Programming Language",
    instructor: "Emily Johnson",
    rating: 4.9,
    fee: 59.99,
    bestseller: true,
    students: 1300,
    imageUrl: "https://source.unsplash.com/random/300x200?oop",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {sampleCourses.map((course) => (
        <div
          key={course.id}
          className="bg-white shadow-md rounded-md overflow-hidden"
        >
          <img
            className="h-40 w-full object-cover"
            src={course.imageUrl}
            alt={course.title}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              Instructor: {course.instructor}
            </p>
            <div className="flex items-center mb-2">
              {/* {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={
                    index < course.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))} */}
              <span className="text-sm text-gray-600 ml-1">
                ({course.rating.toFixed(1)} out of 5)
              </span>
            </div>
            {course.bestseller && (
              <div className="bg-yellow-500 text-white font-bold px-2 py-1 rounded-md mb-2">
                Bestseller
              </div>
            )}
            <p className="text-lg font-semibold text-green-700">
              Fee: ${course.fee.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
