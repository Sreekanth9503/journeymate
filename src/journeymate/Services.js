import React from "react";

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Our Travel Services</h2>
      <p className="text-center text-muted mb-5">
        At <strong>JourneyMate</strong>, we make your travel effortless, enjoyable, and memorable. 
        From planning to exploring, we take care of everything — so you can focus on the adventure.
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="bi bi-globe-americas fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">Customized Travel Planning</h5>
            <p className="text-muted">
              Our experts craft personalized itineraries that match your style — 
              whether you love beaches, mountains, or city escapes.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="bi bi-house-door fs-1 text-success mb-3"></i>
            <h5 className="fw-bold">Hotel & Resort Bookings</h5>
            <p className="text-muted">
              Enjoy exclusive deals on premium hotels and resorts — 
              comfort and convenience wherever you go.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="bi bi-car-front fs-1 text-warning mb-3"></i>
            <h5 className="fw-bold">Car Rentals & Transfers</h5>
            <p className="text-muted">
              Reliable, comfortable vehicles for local travel or road trips — 
              with professional drivers and 24/7 support.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="bi bi-airplane fs-1 text-danger mb-3"></i>
            <h5 className="fw-bold">Flight & Ticketing Assistance</h5>
            <p className="text-muted">
              Get the best flight deals and instant ticket confirmations — 
              we handle all your travel logistics.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="bi bi-people fs-1 text-info mb-3"></i>
            <h5 className="fw-bold">Group & Family Packages</h5>
            <p className="text-muted">
              Special packages for families, students, and corporate groups 
              — tailored to ensure maximum fun and value.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="bi bi-sun fs-1 text-secondary mb-3"></i>
            <h5 className="fw-bold">Adventure & Wellness Tours</h5>
            <p className="text-muted">
              From thrilling treks to peaceful retreats, 
              we create experiences that refresh your mind and soul.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h5 className="fw-bold mb-3">Ready to Begin Your Journey?</h5>
        <p className="text-muted mb-3">
          Let us handle the details — you just pack your bags and enjoy the experience!
        </p>
        <button className="btn btn-primary px-4 py-2">
          <i className="bi bi-calendar-check me-2"></i> Book Your Next Trip
        </button>
      </div>
    </div>
  );
};

export default Services;
