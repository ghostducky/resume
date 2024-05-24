import React, { useState } from 'react';
import '../css/style.css';

function ContactPage() {
  const [hoveredImage, setHoveredImage] = useState(null);
  return (
    <div className='img-container'>
      <img
        className='gihub-logo'
        src={hoveredImage === 'github' ? '/images/github-logo.png' : '/images/github-logo-filtered.png'}
        alt="Github Logo"
        width="auto"
        height="25px"
        onMouseEnter={() => setHoveredImage('github')}
        onMouseLeave={() => setHoveredImage(null)}
      />
      <img
        className='linkedin-logo'
        src={hoveredImage === 'linkedin' ? '/images/linkedin-logo.png' : '/images/linkedin-logo-filtered.png'}
        alt='Linkedin Logo'
        width='auto'
        height='25px'
        onMouseEnter={() => setHoveredImage('linkedin')}
        onMouseLeave={() => setHoveredImage(null)}
      />
      <img
        className='mail-logo'
        src={hoveredImage === 'mail' ? './images/mail-logo.png' : '/images/mail-logo-filtered.png'}
        alt='Mail Logo'
        width='auto'
        height='25px'
        onMouseEnter={() => setHoveredImage('mail')}
        onMouseLeave={() => setHoveredImage(null)}
      />
    </div>
  );
}

export default ContactPage;