import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext.tsx';
import DeleteProfileButton from './DeleteProfileButton.tsx';

const ProfileDisplay = () => {
  const { profile } = useProfile();

  if (!profile?.firstName) {
    return (
      <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg'>
        <p>No profile found. Please create one.</p>
        <Link
          to='/profile-form'
          className='block mt-4 text-blue-500 hover:text-blue-600'
        >
          Create Profile
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6'>Profile Details</h2>
      <div className='space-y-4'>
        <div>
          <strong>Name:</strong> {profile.firstName} {profile.lastName}
        </div>
        <div>
          <strong>Email:</strong> {profile.email}
        </div>
        {profile.age && (
          <div>
            <strong>Age:</strong> {profile.age}
          </div>
        )}
      </div>
      {profile.firstName && (
        <div className='mt-2 flex justify-between'>
          <Link
            to='/profile-form'
            className=' text-blue-500 hover:text-blue-600'
          >
            Edit Profile
          </Link>
          <DeleteProfileButton />
        </div>
      )}{' '}
    </div>
  );
};
export default ProfileDisplay;
