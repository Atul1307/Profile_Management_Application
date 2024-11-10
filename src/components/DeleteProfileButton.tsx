import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext.tsx';
import { deleteProfile } from '../services/api.ts';

const DeleteProfileButton: React.FC = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { setProfile } = useProfile();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteProfile();
      localStorage.removeItem('profile');
      const newProfile = {
        firstName: '',
        lastName: '',
        email: '',
        age: undefined,
      };
      setProfile(newProfile);
      navigate('/profile-form');
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
    setIsConfirmOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsConfirmOpen(true)}
        className='mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
      >
        Delete Profile
      </button>

      {isConfirmOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-lg font-bold mb-4'>Confirm Deletion</h3>
            <p className='mb-4'>
              Are you sure you want to delete your profile? This action cannot
              be undone.
            </p>
            <div className='flex justify-end space-x-4'>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteProfileButton;
