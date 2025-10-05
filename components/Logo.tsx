
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex-shrink-0">
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_2)">
            <path d="M20 0H80C91.0457 0 100 8.9543 100 20V80C100 91.0457 91.0457 100 80 100H20C8.9543 100 0 91.0457 0 80V20C0 8.9543 8.9543 0 20 0Z" fill="white"/>
            <path d="M0 0H50V50H0V0Z" fill="#002060" transform="translate(0, 0)" />
            <path d="M50 0H100V50H50V0Z" fill="#FFC000" transform="translate(0, 0)" />
            <path d="M0 50H50V100H0V50Z" fill="#C00000" transform="translate(0, 0)" />
            <circle cx="75" cy="75" r="25" fill="white" />
            <circle cx="75" cy="75" r="8" fill="#595959" />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <path d="M20 0H80C91.0457 0 100 8.9543 100 20V80C100 91.0457 91.0457 100 80 100H20C8.9543 100 0 91.0457 0 80V20C0 8.9543 8.9543 0 20 0Z" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <h1 className="text-3xl font-bold font-heading tracking-tight text-victrix-blue">victrix</h1>
        <p className="text-sm text-victrix-gray -mt-1">we find solutions...</p>
      </div>
    </div>
  );
};

export default Logo;
