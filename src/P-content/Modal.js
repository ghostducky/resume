// Modal.js
import React from 'react';
//import Modal from './Modal';
import '../css/style.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  /*const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };*/
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-button" onClick={onClose}>x</button>
        {children}
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
export default Modal;
