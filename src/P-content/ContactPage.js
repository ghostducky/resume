import React, { useState } from 'react';
import '../css/style.css';

function ContactPage() {
  const [hoveredImage, setHoveredImage] = useState(null);
  return (
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
        <a>
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
  );
}

export default ContactPage;