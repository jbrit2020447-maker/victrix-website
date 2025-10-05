import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';

const HomePage: React.FC = () => {
  return (
    <>
      <section 
        className="relative bg-cover bg-center h-[calc(100vh-80px)] flex items-center text-white"
        style={{ backgroundImage: "url('/images/clean-green-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <Logo className="mx-auto mb-6 w-40 md:w-56 animate-fade-in-down" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
            Finding Sustainable Solutions For a Cleaner Tomorrow
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Together, we build a safer and greener future — for our communities, our environment, and the next generation.
          </p>
          <Link
            to="/about"
            className="bg-green-400 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-500 transition-transform transform hover:scale-105 duration-300 animate-fade-in-up"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Sustainable Waste & Destruction Management
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Victrix leads the way in providing responsible waste management, destruction, and recycling solutions. 
            Our services are designed to protect the environment while meeting the highest global standards.
          </p>
          <img
            src="/images/facility.jpg"
            alt="Recycling Facility"
            className="mx-auto rounded-lg shadow-lg w-full md:w-3/4"
          />
        </div>
      </section>

      <section className="py-16 bg-green-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            To promote best practices and create smart, sustainable solutions for customers by sourcing the perfect answer to every need.
          </p>
          <div className="mt-8">
            <Link
              to="/services"
              className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-green-700 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build a More Sustainable Future, Together.
          </h2>
          <p className="text-lg mb-8">
            Have a question? Need a solution? We’re here to help.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
