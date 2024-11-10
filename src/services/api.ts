import config from '../config/config.ts';
import { Profile } from '../types/Profile.ts';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

export const saveProfile = async (profile: Profile): Promise<Profile> => {
  const response = await fetch(`${config.apiBaseUrl}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return handleResponse(response);
};

export const updateProfile = async (profile: Profile): Promise<Profile> => {
  const response = await fetch(`${config.apiBaseUrl}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return handleResponse(response);
};

export const deleteProfile = async (): Promise<void> => {
  const emptyProfile = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
  };

  const response = await fetch(`${config.apiBaseUrl}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emptyProfile),
  });
  return handleResponse(response);
};

export const getProfile = async (): Promise<Profile> => {
  const response = await fetch(`${config.apiBaseUrl}/profile`);
  return handleResponse(response);
};
