import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext.tsx';
import Navigation from './components/Navigation.tsx';
import ProfileForm from './components/ProfileForm.tsx';
import ProfileDisplay from './components/ProfileDisplay.tsx';
import NotFound from './components/NotFound.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <div className='min-h-screen flex flex-col bg-gray-100'>
          <Navigation />
          <div className='container mx-auto px-4 py-8 flex-grow'>
            <Routes>
              <Route path='/' element={<Navigate to='/profile' replace />} />
              <Route path='/profile-form' element={<ProfileForm />} />
              <Route path='/profile' element={<ProfileDisplay />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='*' element={<Navigate to='/404' replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ProfileProvider>
  );
};

export default App;
