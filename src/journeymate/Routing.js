import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './Home';
import About from './About';
import Reviews from './Reviews';
import Services from './Services';
import BookDrive from './BookDrive';
import Destinations from './Destinations';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About} />
      <Route path="/services" Component={Services} />
      <Route path="/Reviews" Component={Reviews} />
      <Route path="/BookDrive" Component={BookDrive} />
      <Route path="/Destinations" Component={Destinations} />
    </Routes>
  );
};

export default Routing;
