import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Reviews() {
  const reviews = [
    {
      name: "Anita Reddy",
      location: "Hyderabad, India",
      rating: 5,
      review:
        "JourneyMate made my Bali trip absolutely seamless! Every detail was taken care of — from booking to exploring.",
    },
    {
      name: "Rohit Kumar",
      location: "Mumbai, India",
      rating: 4,
      review:
        "Superb service and affordable deals. Their support team guided me throughout the Europe trip!",
    },
    {
      name: "Sneha Varma",
      location: "Bangalore, India",
      rating: 5,
      review:
        "Loved the personalized travel plans! I discovered hidden gems in Kerala that weren’t on any travel site.",
    },
    {
      name: "Rajesh Pillai",
      location: "Chennai, India",
      rating: 4,
      review:
        "JourneyMate truly understands travelers. They made my honeymoon in the Maldives unforgettable.",
    },
    {
    name: "Anita Reddy",
    location: "Hyderabad, India",
    rating: 5,
    review:
      "JourneyMate made my Bali trip absolutely seamless! Every detail was taken care of — from booking to exploring.",
  },
  {
    name: "Rohit Kumar",
    location: "Mumbai, India",
    rating: 4,
    review:
      "Superb service and affordable deals. Their support team guided me throughout the Europe trip!",
  },
  ];

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">What Our Travelers Say</h2>
      <p className="text-center text-muted mb-5">
        Discover what our happy travelers have to say about their JourneyMate experience.
      </p>

      <div className="row mb-3">
        {reviews.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">{item.name}</h5>
                <p className="text-muted small">{item.location}</p>
                <div className="mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                  {[...Array(5 - item.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star text-warning"></i>
                  ))}
                </div>
                <p className="text-muted">{item.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review CTA */}
      <div className="text-center mt-5">
        <h5 className="fw-bold mb-3">Have a story to share?</h5>
        <button className="btn btn-primary px-4 py-2">
          <i className="bi bi-pencil-square me-2"></i> Write a Review
        </button>
      </div>
    </div>
  );
}
