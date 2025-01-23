import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={image} alt="Large view" id="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
