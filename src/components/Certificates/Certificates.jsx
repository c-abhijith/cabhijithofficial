import React, { useState } from 'react';
import './Certificates.css';
import CertificatesData from './CertificatesData';

export const Certificates = () => {
  const [certificates] = useState(CertificatesData);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My Achievements</span>

      <div className="certificates__container">
        {certificates.map((cert) => (
          <div className="certificate__card" key={cert.id}>
            <div className="certificate__image-wrapper">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="certificate__img"
              />
              <div className="certificate__overlay">
                <button 
                  className="view__button"
                  onClick={() => openModal(cert.image)}
                >
                  <i className="uil uil-eye"></i>
                  View Certificate
                </button>
              </div>
            </div>
            <div className="certificate__content">
              <h3 className="certificate__title">{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              <i className="uil uil-times"></i>
            </button>
            <img src={selectedImage} alt="Certificate" className="modal__image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

