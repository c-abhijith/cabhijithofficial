import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Modal from './Modal';
import './CertificatesCard.css';

const CertificatesCard = ({ certificate }) => {
  const { title, image } = certificate;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div 
      className={`certificate-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="certificate-image-wrapper">
        <img src={image} alt={title} className="certificate-image" />
        <div className="certificate-overlay">
          <button 
            className="view-button"
            onClick={handleViewClick}
          >
            <AiOutlineEye className="eye-icon" />
            <span>View Certificate</span>
          </button>
        </div>
      </div>
      <div className="certificate-content">
        <h3 className="certificate-title">{title}</h3>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} image={image} />
    </div>
  );
};

export default CertificatesCard;
