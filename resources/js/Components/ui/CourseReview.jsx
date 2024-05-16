import React, { useState, useEffect } from 'react';

function CourseReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [timeSincePosted, setTimeSincePosted] = useState('Just now');

  const course = {
    review: 'This course is amazing! It provides a comprehensive introduction to React and covers all the essential topics in a clear and concise manner.',
    instructor: 'John Doe',
    timestamp: Date.now()
  };

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const calculateTimeSincePosted = () => {
    const now = Date.now();
    const diff = now - course.timestamp;
    const seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
      setTimeSincePosted('Just now');
    } else if (seconds < 3600) {
      setTimeSincePosted(`${Math.floor(seconds / 60)}m ago`);
    } else if (seconds < 86400) {
      setTimeSincePosted(`${Math.floor(seconds / 3600)}h ago`);
    } else {
      setTimeSincePosted(`${Math.floor(seconds / 86400)}d ago`);
    }
  };

  useEffect(() => {
    calculateTimeSincePosted();
  }, []);

  const initials = course.instructor
    .split(' ')
    .map((name) => name.charAt(0))
    .join('')
    .toUpperCase();

  const stars = [];
  const maxRating = 5;
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span
        key={i}
        className={`cursor-pointer text-lg ${i <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
        onClick={() => handleClick(i)}
        onMouseOver={() => handleMouseOver(i)}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </span>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white mr-4">
          {initials}
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold">{course.instructor}</p>
          <div className="flex items-center">
            {stars}
            <span className="text-sm text-gray-500 ml-2">{timeSincePosted}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{course.review}</p>
      <div className="flex items-center mt-4">
        <p className="mr-4">Helpful?</p>
        <div className="flex items-center">
          <span role="img" aria-label="thumbs-up" className="cursor-pointer mr-2">👍</span>
          <span role="img" aria-label="thumbs-down" className="cursor-pointer">👎</span>
        </div>
      </div>
    </div>
  );
}

export default CourseReview;
