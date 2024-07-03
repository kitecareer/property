import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Titlebar from './components/Titlebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import View from './customer_dashboard/Viewmore';
import Post from './customer_dashboard/property_details/property_detail'
import Dash from './customer_dashboard/Dash';
import Own from './customer_dashboard/Own';


function App() {
  return (
    <Router>
      <Titlebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post property" element={<Register />} />
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/property_details" element={<Post />} />
        <Route path="/viewmore" element={<View />} />
        <Route path="/owned-property" element={<Own />} />
        <Route path="/property/:id" element={<View />} />
      </Routes>
    </Router>
  );
}
export default App;
