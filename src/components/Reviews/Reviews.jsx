import React from 'react';

const Reviews = ({ vehicle }) => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <ul>
        {vehicle.reviews.map((review, index) => (
          <li key={index}>
            <p>{review.comment}</p>
            <p>Rating: {review.reviewer_rating}</p>
            <p>Reviewer: {review.reviewer_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
