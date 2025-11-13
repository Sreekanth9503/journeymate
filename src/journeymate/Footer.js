import React from "react";
const Footer = () => {
  return (
    <footer className="journey-footer text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6 text-md-start text-center">
            <h3 className="footer-logo mb-3">
              <span className="text-danger">Journey</span>
              <span className="text-primary glow-text">Mate</span>
            </h3>
            <p className="text-light opacity-75 mb-4">
              Your trusted travel partner for unforgettable experiences.  
              We bring your dream destinations to life with comfort, joy, and adventure.
            </p>
            <h6 className="fw-bold mb-2 text-uppercase">Subscribe for Updates</h6>
          </div>
          <div className="col-lg-2 col-md-6 text-md-start text-center">
            <h5 className="fw-bold mb-3 text-uppercase">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About Us</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/Destinations">Destinations</a></li>
              <li><a href="/Reviews">Reviews</a></li>
              <li><a href="/BookDrive">Book a Drive</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 text-md-start text-center">
            <h5 className="fw-bold mb-3 text-uppercase">Popular Destinations</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Maldives</a></li>
              <li><a href="#">Switzerland</a></li>
              <li><a href="#">Bali</a></li>
              <li><a href="#">Goa</a></li>
              <li><a href="#">Paris</a></li>
              <li><a href="#">Dubai</a></li>
            </ul>
          </div>


          <div className="col-lg-3 col-md-6 text-md-start text-center">
            <h5 className="fw-bold mb-3 text-uppercase">Contact Us</h5>
            <p className="text-light mb-2"><i className="bi bi-geo-alt-fill text-danger me-2"></i> Flat No. 202, Ganga Savitri Apartment, Hyderabad, India</p>
            <p className="text-light mb-2"><i className="bi bi-telephone-fill text-primary me-2"></i> +91 98765 43210</p>
            <p className="text-light mb-3"><i className="bi bi-envelope-fill text-warning me-2"></i> support@journeymate.com</p>

            <div className="d-flex justify-content-md-start justify-content-center gap-3 social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>


        <hr className="footer-divider mt-5" />


        <div className="text-center mt-3">
          <p className="mb-0 small text-secondary">
            © {new Date().getFullYear()} <strong className="text-primary">JourneyMate</strong> — Crafted with ❤️ for Travelers Everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
