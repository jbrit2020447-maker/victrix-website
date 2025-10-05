
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[calc(100vh-80px)] flex items-center text-white" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=290')" }}
      >
        <div className="absolute inset-0 bg-victrix-blue bg-opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-fade-in-down">Finding Sustainable Solutions For a Cleaner Tomorrow</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">Victrix leads the way in responsible waste management, destruction, and recycling services. We are your partners in building a safer, greener future.</p>
          <Link to="/services" className="bg-victrix-yellow text-victrix-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 duration-300 animate-fade-in-up">
            Our Services
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-victrix-blue mb-4">Comprehensive Waste Management</h2>
          <p className="text-lg text-victrix-gray max-w-4xl mx-auto mb-12">From secure product destruction to advanced recycling and landfill management, Victrix provides end-to-end solutions compliant with the highest Environmental, Health, and Safety standards.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-victrix-blue mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-victrix-blue mb-2">Secure Destruction</h3>
              <p>Protecting your brand with certified destruction of products, documents, and materials.</p>
            </div>
            <div className="p-6">
              <div className="text-victrix-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-victrix-blue mb-2">Eco-Friendly Recycling</h3>
              <p>Innovative recycling programs to minimize waste and maximize resource recovery.</p>
            </div>
            <div className="p-6">
               <div className="text-victrix-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-victrix-blue mb-2">Project Management</h3>
              <p>Expert management of complex waste projects, from asbestos removal to STP design.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
