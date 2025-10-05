
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-victrix-yellow transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-victrix-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Tagline */}
          <div className="md:col-span-1">
            <Logo />
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-victrix-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-victrix-yellow transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-victrix-yellow transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-victrix-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>No. 6, Mamatid Road, Banlic, Cabuyao. Laguna, Philippines</span>
              </li>
              <li className="flex items-start">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+63 917 6864200</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>sales@victrix.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
             <h3 className="text-lg font-bold font-heading mb-4">Follow Us</h3>
             <div className="flex space-x-4">
                <SocialIcon href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </SocialIcon>
                 <SocialIcon href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
                </SocialIcon>
                 <SocialIcon href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02 2.5.06 4.13 1.04 5.51 2.86 1.03 1.34 1.58 2.92 1.56 4.7.02 3.29.02 6.57 0 9.86-.02 1.79-.58 3.37-1.58 4.7-1.38 1.83-3.01 2.8-5.51 2.86-2.62.03-5.24.03-7.86 0-2.5-.06-4.13-1.04-5.51-2.86-1.03-1.34-1.58-2.92-1.56-4.7-.02-3.29-.02-6.57 0-9.86.02-1.79.58-3.37 1.58-4.7C3.39 1.06 5.02.08 7.52.02c1.3-.03 2.6-.04 3.9-.02h1.1zM9.38 7.56c-1.58.02-3.17 0-4.75.02-.13 1.56.02 3.13 0 4.69.02 1.55-.02 3.1 0 4.65.02 1.3.9 2.12 2.13 2.1.29-.01.58-.01.88-.01 1.57.02 3.13-.02 4.69 0 1.56-.02 3.13.02 4.69 0 1.23.02 2.11-.8 2.13-2.1.02-.28.01-.57.01-.86 0-1.55.02-3.1 0-4.65-.02-1.56.02-3.13 0-4.69-.02-1.28-.88-2.1-2.12-2.1-.29.01-.58.01-.88.01-1.56-.02-3.13.02-4.69 0-1.56.02-3.13-.02-4.69 0z" /></svg>
                </SocialIcon>
             </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-sm">
            &copy; 2024 Victrix. All rights reserved. | 
            <a href="#" className="hover:text-victrix-yellow mx-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-victrix-yellow mx-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
