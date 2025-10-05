import React from 'react';
import logo from '../Assets/Logo.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img src={logo} alt="Victrix Logo" className="w-12 h-12" />
      <div>
        <h1 className="text-3xl font-bold font-heading tracking-tight text-victrix-blue">
          victrix
        </h1>
        <p className="text-sm text-victrix-gray -mt-1">we find solutions...</p>
      </div>
    </div>
  );
};

export default Logo;
