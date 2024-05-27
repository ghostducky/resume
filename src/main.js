
import React from 'react';
import './css/style.css';
import ProfilePage from './P-content/ProfilePage';
import ContactPage from './P-content/ContactPage';
import AboutPage from './P-content/AboutPage';



function App() {
  return (
    <div className="main">
      <ProfilePage />
      <ContactPage />
      <AboutPage />
    </div>
  );
}

export default App;