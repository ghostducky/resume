import React, { useState } from 'react';
import '../css/style.css';
import AboutPage from './AboutPage';

function ProfilePage() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const name = 'onni.raappanao';
  const domain = 'gmail.com';

  return (
    <div className='main'>
      <div className='left-page'>
        {/* Profile section */}
        <div className='profile'>
          <div className='profileBg Ptext'>
            <h1>Onni Raappana</h1>
            <div className='occupation text'>
              <p>Software Developer</p>
            </div>
          </div>
        </div>




        {/* Selection section */}
        <div className='selection-container'>
          <div className='about-container container'>
            <h4>ABOUT</h4>
          </div>
          <div className='projects-container container'>
            <h4>PROJECTS</h4>
          </div>
          <div className='experience-container container'>
            <h4>EXPERIENCE</h4>
          </div>
        </div>




        {/* Social links section */}
        <div className='img-container'>
          <div className='git-container'>
            <a href='https://github.com/ghostducky' target="_blank" rel="noopener noreferrer">
              <img
                className='github-logo'
                src={hoveredImage === 'github' ? '/images/github-logo.png' : '/images/github-logo-filtered.png'}
                alt="Github Logo"
                width="auto"
                height="25px"
                onMouseEnter={() => setHoveredImage('github')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </a>
          </div>
          <div className='link-container'>
            <a href='https://www.linkedin.com/in/onni-raappana' target="_blank" rel="noopener noreferrer">
              <img
                className='linkedin-logo'
                src={hoveredImage === 'linkedin' ? '/images/linkedin-logo.png' : '/images/linkedin-logo-filtered.png'}
                alt='Linkedin Logo'
                width='auto'
                height='25px'
                onMouseEnter={() => setHoveredImage('linkedin')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </a>
          </div>
          <div className='mail-container'>
            <a href={`mailto:${name}@${domain}`}>
              <img
                className='mail-logo'
                src={hoveredImage === 'mail' ? '/images/mail-logo.png' : '/images/mail-logo-filtered.png'}
                alt='Mail Logo'
                width='auto'
                height='25px'
                onMouseEnter={() => setHoveredImage('mail')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </a>
          </div>
        </div>
      </div>
      <AboutPage />
    </div>
  );
}

export default ProfilePage;
