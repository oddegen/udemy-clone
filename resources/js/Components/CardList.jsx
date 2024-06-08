import React from "react";
import StarRatings from "react-star-ratings";
import { Inertia } from "@inertiajs/inertia";

const CardList = ({ courses }) => {
  console.log(courses);
  const handleClick = (course) => {
      Inertia.get(`/course/${course.id}`);
  };
// import StarIcon from "@mui/icons-material/Star";
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {Object.values(courses).map((course) => (
              <div
                  key={course.id}
                  className="bg-white shadow-md rounded-md overflow-hidden"
                  onClick={() => handleClick(course)}
              >
                  <img
                      className="h-40 w-full object-cover"
                      src="https://source.unsplash.com/random/300x200?oop"
                      alt={course.title}
                  />
                  <div className="p-4">
                      <h2 className="text-lg font-semibold mb-1">
                          {course.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2">
                          Instructor: {course.creator.name}
                      </p>
                      <div className="flex items-center mb-2">
                          <span className="text-md me-2">
                              {course.rating_avg_rating.toFixed(1)}
                          </span>
                          <StarRatings
                              rating={course.rating_avg_rating}
                              starRatedColor="gold"
                              starDimension="12px"
                              starSpacing="0px"
                          />
                          <span className="ms-2 text-gray-400">
                              ({course.rating_count})
                          </span>
                      </div>
                      <p className="text-lg font-semibold text-green-700">
                          Price: ${course.price.toFixed(2)}
                      </p>
                  </div>
              </div>
          ))}
      </div>
  );
};

export default CardList;
