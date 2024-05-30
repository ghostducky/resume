// Modal.js
import React from 'react';
import '../css/style.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-button" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
