import React from 'react';
import HomeCards from './HomeCards';

const HomeContent = () => {
  return (
    <>
      {/* HERO / INTRO SECTION */}
      <section className="intro-section text-center text-light d-flex flex-column justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="content position-relative z-2 px-3">
          <h1 className="fw-bold display-4 mb-3">Your Ultimate Travel Companion</h1>
          <p className="lead mb-4">
            At JourneyMate, we believe travel is more than just reaching a destination —
            it’s about creating memories that last a lifetime. Whether you dream of tropical beaches,
            thrilling adventures, or cultural escapes, we craft personalized trips tailored just for you.
          </p>
          <button className="btn btn-warning fw-semibold px-4 py-2 fs-6 shadow">Explore Destinations</button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="container py-5 bg-light text-center">
        <div className="row justify-content-center">
          {[
            { icon: "🌍", text: "100+ Destinations" },
            { icon: "🏨", text: "500+ Partner Hotels" },
            { icon: "🚗", text: "Easy Bookings" },
            { icon: "💬", text: "24/7 Support" },
          ].map((item) => (
            <div className="col-md-3 col-6 mb-4" key={item.text}>
              <div className="stat-card shadow-sm p-4 bg-white rounded-4">
                <h1 className="display-5">{item.icon}</h1>
                <h5 className="fw-bold mt-2">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="offer-section container text-center py-5">
        <h2 className="fw-bold mb-4 text-dark fs-2">What We Offer</h2>
        <div className="row justify-content-center">
          {[
            { icon: "✈️", text: "Flight & Hotel Bookings" },
            { icon: "🚗", text: "Car Rentals" },
            { icon: "🎫", text: "Holiday Packages" },
            { icon: "📸", text: "Custom Travel Itineraries" },
            { icon: "🧭", text: "Guided Tours" },
          ].map((item) => (
            <div className="col-md-4 mb-4" key={item.text}>
              <div className="offer-card shadow-sm p-4 bg-white rounded-4">
                <div className="icon mb-3 fs-1">{item.icon}</div>
                <h5 className="fw-semibold fs-5">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <HomeCards />

      {/* POPULAR DESTINATIONS */}
      <section className="container py-5 bg-light text-center">
        <h2 className="fw-bold mb-4 fs-2">Popular Destinations</h2>
        <div className="row justify-content-center">
          {[
            {
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
              title: "Maldives",
              desc: "Experience paradise with crystal-clear waters and private resorts.",
            },
            {
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
              title: "Paris, France",
              desc: "The city of lights and love, where culture meets romance.",
            },
            {
              img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600",
              title: "Bali, Indonesia",
              desc: "A tropical haven with beaches, temples, and adventure.",
            },
            {
              img: "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?w=600",
              title: "Switzerland",
              desc: "Snowy Alps, scenic lakes, and serene mountain villages.",
            },
            {
              img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600",
              title: "Dubai, UAE",
              desc: "Where luxury meets adventure — discover the desert and skyline.",
            },
            {
              img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
              title: "New York, USA",
              desc: "The city that never sleeps — iconic landmarks and vibrant life.",
            },
          ].map((card) => (
            <div className="col-md-4 mb-4" key={card.title}>
              <div className="card destination-card border-0 shadow-lg rounded-4">
                <img src={card.img} className="card-img-top rounded-top-4" alt={card.title} />
                <div className="card-body">
                  <h5 className="fw-bold fs-5">{card.title}</h5>
                  <p className="text-muted fs-6">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section text-center text-dark py-5">
        <h2 className="fw-bold mb-4 fs-2">What Our Travelers Say</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="testimonial-card shadow-sm p-4 bg-white rounded-4">
                <p className="fst-italic text-muted fs-6">
                  “JourneyMate made our honeymoon unforgettable! Everything was perfectly arranged.”
                </p>
                <h6 className="fw-bold mt-3 text-primary fs-6">– Aarav & Meera, Mumbai</h6>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="testimonial-card shadow-sm p-4 bg-white rounded-4">
                <p className="fst-italic text-muted fs-6">
                  “Their support team was amazing during our Europe trip. Highly recommended!”
                </p>
                <h6 className="fw-bold mt-3 text-primary fs-6">– Rahul, Bangalore</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section text-center text-white py-5">
        <div className="overlay"></div>
        <div className="position-relative z-2 px-3">
          <h2 className="fw-bold mb-3 display-6">Ready to Start Your Next Adventure?</h2>
          <p className="lead mb-4 fw-light fs-6">
            Your journey begins with a single click. Explore, dream, and discover the world with JourneyMate.
          </p>
          <button className="btn btn-warning fw-bold px-4 py-2 fs-6 shadow">Book a Trip</button>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
