import React, { useState } from 'react';
//import Modal from './Modal';
import '../css/style.css';

function ContactPage() {
  const [hoveredImage, setHoveredImage] = useState(null);
  /*const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };*/

  const name = 'onni.raappanao';
  const domain = 'gmail.com';

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
  );
}
  /*<Modal isOpen={isModalOpen} onClose={closeModal}>
    <h2>Contact Me</h2>
    <p>Please send your email to onni.raappanao@gmail.com.</p>
    <form className='mail-Form'>
      <label for="email">Email:</label>
      <input type="text" itemID="email" name="email" autocomplete="email" placeholder="example@gmail.com" required/>
      <label for="name">Name:</label>
      <input type="text" itemID="name" name="name" autocomplete="name" placeholder="Jack Meoff" required />
      <label for="message">Message:</label>
      <textarea itemID="message" name="message" rows="4" placeholder="Type your message here..." required />
    </form>
    <button itemID="send" className="send-button" type="button">SEND</button>
    <p itemID='error-message' className="error-message">---</p>
  </Modal>*/
export default ContactPage;