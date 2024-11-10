import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center'>
    <h2 className='text-2xl font-bold mb-4'>404 - Page Not Found</h2>
    <p className='mb-4'>Oops!! The page you're looking for doesn't exist.</p>
    <Link to='/' className='text-blue-500 hover:text-blue-600'>
      Go Home
    </Link>
  </div>
);
export default NotFound;
