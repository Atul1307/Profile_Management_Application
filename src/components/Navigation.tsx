import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext.tsx';

const Navigation = () => {
  const { profile } = useProfile();

  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex space-x-4'>
          <Link to='/' className='hover:text-gray-300'>
            Home
          </Link>
          <Link to='/profile-form' className='hover:text-gray-300'>
            Edit Profile
          </Link>
          <Link to='/profile' className='hover:text-gray-300'>
            View Profile
          </Link>
        </div>
        {profile && (
          <div>
            {profile.firstName} {profile.lastName}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
