import React from 'react';
import { nanoid } from 'nanoid';
import allCertificates from './Data/certificates';
import Fancybox from './Fancybox';
import MotionComponent from './MotionComponent';

const Certificate = () => {
  const certificateElements = allCertificates.map(certificate => {
    return certificate.verify ? (
      <div key={nanoid()} className="ver">
        <img src={require(`../images/Certificates/${certificate.image}`)} alt={certificate.title} title={certificate.title} />
        <div className="ver_wrapper">
          <button>
            <a className="view-link" data-fancybox="certificates" href={require(`../images/Certificates/${certificate.image}`)}>
              View
            </a>
          </button>
          <button>
            <a id="verify" className="view-link" data-fancybox={certificate.title} href={require(`../images/Certificates/${certificate.verify}`)}>
              Scan QR
            </a>
          </button>
        </div>
      </div>
    ) : (
      <a key={nanoid()} data-fancybox="certificates" href={require(`../images/Certificates/${certificate.image}`)}>
        <img src={require(`../images/Certificates/${certificate.image}`)} alt={certificate.title} title={certificate.title} />
      </a>
    );
  });

  const Content = () => { 
    return (
      <>
        <h1 className="headings">CERTIFICATES</h1>
        <div className="gallery">
          <Fancybox>{certificateElements}</Fancybox>
        </div>
      </>
    );
  };

  return (
    <MotionComponent tag={"section"} id={"certificate"} content={<Content />} />
  );
};

export default Certificate;