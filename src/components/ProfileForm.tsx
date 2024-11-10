import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext.tsx';
import { saveProfile } from '../services/api.ts';

const ProfileForm = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfile();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const newProfile = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      age: formData.get('age') ? Number(formData.get('age')) : undefined,
    };

    try {
      const savedProfile = await saveProfile(newProfile);
      setProfile(savedProfile);
      navigate('/profile');
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'An error occurred while saving the profile'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6'>Profile Form</h2>
      {error && (
        <div className='mb-4 p-4 bg-red-100 text-red-700 rounded'>{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='firstName' className='block mb-2'>
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            defaultValue={profile?.firstName}
            required
            minLength={3}
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='lastName' className='block mb-2'>
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            defaultValue={profile?.lastName}
            required
            minLength={3}
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            defaultValue={profile?.email}
            required
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='age' className='block mb-2'>
            Age (Optional)
          </label>
          <input
            type='number'
            id='age'
            name='age'
            defaultValue={profile?.age}
            className='w-full p-2 border rounded'
          />
        </div>
        <button
          type='submit'
          disabled={loading}
          className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </div>
  );
};
export default ProfileForm;
