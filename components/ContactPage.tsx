import React from 'react';

// Fix: Changed icon type from JSX.Element to React.ReactNode to resolve namespace error.
const ContactInfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
      <div className="flex-shrink-0 text-victrix-blue mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-bold font-heading text-victrix-blue">{title}</h3>
        <div className="text-victrix-gray mt-1">{children}</div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-heading text-victrix-blue">Let's Build a More Sustainable Future, Together.</h1>
          <p className="text-xl text-victrix-gray mt-2">Have a question? Need a solution? Reach out below.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
          <ContactInfoCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            title="Mobile"
          >
            <a href="tel:+639176864200" className="hover:text-victrix-yellow">+63 917 6864200</a><br/>
            <a href="tel:+639276281388" className="hover:text-victrix-yellow">+63 927 6281388</a>
          </ContactInfoCard>

          <ContactInfoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="Email Address"
          >
            <a href="mailto:sales@victrix.com" className="hover:text-victrix-yellow">sales@victrix.com</a><br/>
            <a href="mailto:victrix.phils@gmail.com" className="hover:text-victrix-yellow">victrix.phils@gmail.com</a>
          </ContactInfoCard>

          <ContactInfoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            title="Address"
          >
            <p>No. 6, Mamatid Road, Banlic, Cabuyao. Laguna, Philippines</p>
          </ContactInfoCard>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;