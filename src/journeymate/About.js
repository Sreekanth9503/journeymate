import React from "react";

const About = () => {
  return (
    <section className="about-page py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">About <span className="text-primary">Journey<span className="text-danger">Mate</span></span></h1>
          <p className="lead text-muted fs-6">
            Your trusted companion for unforgettable journeys — where every trip becomes a story worth sharing.
          </p>
        </div>

        <div className="row  align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.AwbLBVjgdPO_KIw-zXnaoAHaJZ?pid=Api&P=0&h=180"
              alt="About JourneyMate"
              className="img-fluid w-75 p-5 rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold">Who We Are</h3>
            <p>
              At <strong>JourneyMate</strong>, we believe travel is more than just visiting new places —
              it’s about discovering yourself through the experiences you gather along the way.
              Whether you're looking for peace, adventure, or exploration, we’re here to guide you
              every step of the journey.
            </p>
            <p>
              Founded with a passion for exploration, JourneyMate connects travelers to
              the best destinations, trusted guides, and handpicked accommodations across the globe.
            </p>
            <p>
              From solo backpackers to family vacations and luxury retreats, we’ve guided thousands of travelers toward moments of joy, connection, and adventure. 
              Our team ensures every journey is smooth, personalized, and filled with wonder.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="row text-center my-5">
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded h-100">
              <i className="bi bi-compass text-primary fs-1"></i>
              <h4 className="fw-bold mt-3">Our Mission</h4>
              <p className="text-muted">
                To make travel easy, affordable, and inspiring for everyone — wherever the heart wants to go.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded h-100">
              <i className="bi bi-globe-americas text-success fs-1"></i>
              <h4 className="fw-bold mt-3">Our Vision</h4>
              <p className="text-muted">
                To be the most loved travel companion, helping millions explore the world with confidence and joy.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded h-100">
              <i className="bi bi-heart-fill text-danger fs-1"></i>
              <h4 className="fw-bold mt-3">Our Values</h4>
              <p className="text-muted">
                Trust, transparency, and a passion for adventure — the core values that make every trip memorable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="fw-bold">Ready to Plan Your Next Adventure?</h3>
          <p className="text-muted">
            Let JourneyMate handle your bookings, itineraries, and unforgettable experiences.
          </p>
          <button className="btn btn-primary btn-lg">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default About;
