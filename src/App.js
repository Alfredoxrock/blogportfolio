import React from 'react';
//import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
  	<BrowserRouter>
  		<Navbar/>
  		<main>
	  		<Routes>
	  			<Route path="/" element={<Home />} />
	  			<Route path="/about" element={<About />} /> 
	    		<Route path="/services" element={<Services />} /> 
	    		<Route path="/testimonial" element={<Testimonial />} /> 
	    		<Route path="/contact" element={<Contact />} /> 
	  		</Routes>
  		</main>
  	</BrowserRouter>
    		
  );
}

export default App;
