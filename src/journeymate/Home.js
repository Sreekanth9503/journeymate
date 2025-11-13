import React from "react";
import HomeCards from "./HomeCards";
import mountains from "./assets/mountains.jpeg";
import trekking from "./assets/trekking.jpeg";
import seaImg from "./assets/sea-img.jpg"; 
const Home = () => {
  return (
    <>
      <section className="home-banner">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div
              className="carousel-item active slide-bg"
              style={{ backgroundImage: `url(${mountains})` }} data-bs-interval="3000"
            >
              <div className="slide-content d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className="fw-bold mb-3">Explore the World with JourneyMate</h2>
                <p className="text-white mb-4 w-75">
                  Discover amazing destinations, plan your trips effortlessly, and create unforgettable memories.
                </p>
                <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
                  Start Exploring
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="carousel-item slide-bg"
              style={{ backgroundImage: `url(${seaImg})` }} data-bs-interval="3000"
            >
              <div className="slide-content d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className="fw-bold mb-3">Adventure Awaits You</h2>
                <p className="text-white mb-4 w-75">
                  From mountains to beaches, your next great adventure starts here.
                </p>
                <button className="btn btn-success px-4 py-2 rounded-pill fw-semibold">
                  Discover More
                </button>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className="carousel-item slide-bg"
              style={{ backgroundImage: `url(${trekking})` }} data-bs-interval="3000"
            >
              <div className="slide-content d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className="fw-bold mb-3">Travel Smart, Travel Easy</h2>
                <p className="text-white mb-4 w-75">
                  JourneyMate helps you plan, book, and enjoy your trips effortlessly.
                </p>
                <button className="btn btn-warning px-4 py-2 rounded-pill fw-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <HomeCards />
    </>
  );
};

export default Home;
