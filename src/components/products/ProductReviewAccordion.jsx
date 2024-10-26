import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Textarea } from "../ui/textarea";
import { useSelector } from "react-redux";

const ProductReviewAccordion = ({ allReviews }) => {
  const { email, displayName } =
    useSelector((state) => state?.user?.user) || {};

  const [reviews, setReviews] = useState(allReviews);
  const [newReview, setNewReview] = useState({
    comment: "",
    rating: 0,
  });
  const [isOpen, setIsOpen] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { comment, rating } = newReview;

    if (comment.trim() && rating > 0 && displayName.trim() && email.trim()) {
      setReviews((prevReviews) => [
        ...prevReviews,
        {
          comment: comment.trim(),
          rating,
          reviewerName: displayName.trim(),
          reviewerEmail: email.trim(),
        },
      ]);
      setNewReview({ comment: "", rating: 0 });
      setSuccessMessage("Review submitted successfully!");
    } else {
      setSuccessMessage("Please fill in all fields.");
    }

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const renderStarRating = () => {
    return (
      <div className="flex mt-4">
        <h1 className="pt-1 pr-2">Rate Stars : </h1>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setNewReview({ ...newReview, rating: star })}
            onMouseEnter={() =>
              setNewReview({ ...newReview, hoverRating: star })
            }
            onMouseLeave={() => setNewReview({ ...newReview, hoverRating: 0 })}
            className={`cursor-pointer text-2xl transition-colors duration-200 ${
              star <= (newReview.hoverRating || newReview.rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            tabIndex={0}
            role="button"
            aria-label={`Rate ${star} stars`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-xl">Write a review.</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <Textarea
          type="text"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          placeholder="Add a comment"
          className="border rounded px-2 py-1 mr-2 mt-4"
        />

        {renderStarRating()}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded mt-4"
        >
          Submit
        </button>
        {successMessage && (
          <p className="text-green-500 mt-2">{successMessage}</p>
        )}
      </form>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" open={isOpen}>
          <AccordionTrigger className="mt-1" onClick={toggleAccordion}>
            {` Customer Reviews (${reviews.length})`}
          </AccordionTrigger>
          <AccordionContent>
            {reviews.length > 0 ? (
              <ul>
                {reviews.map((review, index) => (
                  <li key={index} className="mt-4 border-t pt-4">
                    <strong>
                      {review.reviewerName} ({review.rating} stars)
                    </strong>{" "}
                    <br />
                    Comment : {review.comment} <br />
                    <span className="text-sm text-gray-500 pb-3">
                      {review.reviewerEmail}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductReviewAccordion;
