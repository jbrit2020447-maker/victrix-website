
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-heading text-victrix-blue">About Victrix</h1>
          <p className="text-lg text-victrix-gray mt-2">Connecting innovative service providers with the customers who need them.</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold font-heading text-victrix-blue mb-4">Company Background</h2>
            <div className="space-y-4 text-victrix-gray text-lg">
              <p>
                Victrix is a marketing arm of companies dedicated exclusively to the products and/or items destruction services, waste management, recycling, and sustainability sector. We connect innovative service providers with the customers who need them.
              </p>
              <p>
                Victrix group is composed of highly reputable, expert team with local and foreign partners providing the most efficient methodology and technology in the waste management, recycling, and a wide range of services in the environmental and waste solutions industry. We serve both private and government sectors.
              </p>
              <p className="font-bold text-victrix-blue text-xl pt-2">
                At Victrix, we find solutions!
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
             <img src="https://picsum.photos/600/700?image=1074" alt="Professional team" className="rounded-lg shadow-2xl" />
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center bg-victrix-blue text-white p-10 rounded-lg shadow-xl">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-victrix-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h2 className="text-3xl font-bold font-heading mb-4">Our Mission</h2>
            <p className="text-xl">
              To promote best practices and create smartest solutions for customers by sourcing the perfect answer to our customers needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
