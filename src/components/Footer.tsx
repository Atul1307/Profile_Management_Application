import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-3 mt-auto w-full'>
      <div className='container mx-auto px-1'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h3 className='text-xl font-semibold'>Atul</h3>
            <p className='text-gray-300 mt-1'>Full Stack Developer</p>
          </div>

          <div className='flex items-center space-x-6'>
            <a
              href='mailto:your.email@example.com'
              className='flex items-center hover:text-blue-400 transition-colors'
              title='Email'
            >
              <Mail className='h-5 w-5 mr-2' />
              <span className='hidden md:inline'>katul2015@gmail.com</span>
            </a>
          </div>
        </div>

        <div className='text-center mt-1 text-gray-400 text-sm'>
          © {new Date().getFullYear()} Profile Management App. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
