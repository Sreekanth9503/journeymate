import React from "react";
import { Link } from "react-router";
const Navbar = () => {
    return (
        <nav className="navbar container-fluid  navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand fs-1 text-primary" to="/">Journey <span className="text-danger">Mate</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-center w-100">
                        <li className="nav-item px-3">
                            <Link className="nav-link active"  to="/">Home</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/Services">Services</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/Destinations">Destinations</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/Reviews">Reviews</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/BookDrive">Book a Drive</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
