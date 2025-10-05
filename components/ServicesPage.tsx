
import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ServicesPage: React.FC = () => {
  const materials = [
    "Footwear (shoes, slippers)",
    "Clothing (shirts, pants, garments, textiles)",
    "Personal accessories",
    "Beauty products and cosmetics",
    "Food and beverages",
    "Pharmaceuticals (medicines, medical supplies)",
    "Papers, documents, boxes, cartons, books",
    "Plastics - HDPE, LDPE, PE, Etc.",
    "Rubber",
    "Electronics and electrical equipment",
    "Industrial equipment and machinery",
    "Metals, mechanical and hardware materials",
    "Glass, ceramics, tiles, wood"
  ];

  const projectManagementServices = [
    "Solid waste management, treatment, landfill management.",
    "Asbestos removal, transportation, and disposal.",
    "Technology provider for waste treatment solutions.",
    "Sewage treatment plant (STP) design and build, complete package."
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-heading text-victrix-blue">Our Services</h1>
          <p className="text-lg text-victrix-gray mt-2 max-w-3xl mx-auto">Fully-compliant to Environmental, Health, and Safety Standards, we provide a wide range of solutions tailored to your needs.</p>
        </div>

        {/* Destruction Services */}
        <div className="mb-20">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold font-heading text-victrix-blue mb-2">Destruction Services</h2>
            <p className="text-victrix-gray mb-8">Secure and certified destruction for various types of products and materials.</p>
            <h3 className="text-xl font-bold font-heading text-victrix-blue mb-6">MATERIALS WE HANDLE:</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {materials.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon />
                  <span className="text-victrix-gray text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Management */}
        <div>
          <div className="bg-victrix-blue text-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold font-heading mb-2">Project Management</h2>
            <p className="text-gray-300 mb-8">Expert oversight for complex environmental and waste solution projects.</p>
            <div className="space-y-4">
              {projectManagementServices.map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-victrix-yellow mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
