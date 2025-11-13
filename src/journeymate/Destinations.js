import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Destinations() {
  const destinations = [
    {
      title: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      desc: "Experience tropical bliss in Bali with pristine beaches, lush forests, and cultural temples.",
    },
    {
      title: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      desc: "Explore the City of Lights with its art, fashion, and the iconic Eiffel Tower.",
    },
    {
      title: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      desc: "Enjoy luxury, adventure, and futuristic architecture in the desert paradise of Dubai.",
    },
    {
      title: "Goa, India",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      desc: "Unwind on sun-soaked beaches, enjoy seafood, and experience the vibrant nightlife of Goa.",
    },
    {
      title: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      desc: "A dazzling mix of modern tech and ancient culture — Tokyo has something for everyone.",
    },
    {
      title: "Switzerland",
      image: "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      desc: "Breathtaking landscapes, alpine villages, and serene lakes — Switzerland is a dream escape.",
    },
  ];

  return (
    <div className=" container my-5">
      <h2 className="fw-bold text-center mb-4">Popular Destinations</h2>
      <p className="text-center text-muted mb-5">
        Discover some of the most breathtaking destinations handpicked by JourneyMate.
      </p>

      <div className="row">
        {destinations.map((place, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0 destination-card">
              <img
                src={place.image}
                className="card-img-top"
                
              />
              <div className="card-body destination text-center">
                <h5 className="fw-bold">{place.title}</h5>
                <p className="text-muted fw-light fs-6">{place.desc}</p>
                <button className="btn btn-primary me-2">
                 More Info
                </button>
                <button className="btn btn-primary">
                   Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Destinations;