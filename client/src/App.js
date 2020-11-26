import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <ContactForm path="/contact-us"/>
        {/* <About /> */}
      </Router>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
