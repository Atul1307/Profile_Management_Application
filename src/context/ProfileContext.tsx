import React, { createContext, useContext, useState, useCallback } from 'react';
import { Profile } from '../types/Profile';

interface ProfileContextType {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<Profile | null>(() => {
    const savedProfile = localStorage.getItem('profile');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });

  const handleSetProfile = useCallback((newProfile: Profile) => {
    setProfile(newProfile);
    localStorage.setItem('profile', JSON.stringify(newProfile));
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile: handleSetProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (undefined === context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
