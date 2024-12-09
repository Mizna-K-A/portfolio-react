import React, { useState } from 'react';
import defaultPdf from '../assets/MiznaKA.pdf';

const Cv = () => {
  const [pdfSrc, setPdfSrc] = useState(defaultPdf); // Default PDF displayed

  return (
    <div>
      {/* Sticky toolbar containing input and buttons */}
      <div
        className="sticky-toolbar"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'black',
          padding: '10px 0',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="text-center">
          <a
            className="btn btn-success mx-2"
            id="download"
            href={defaultPdf}
            download="MiznaKA.pdf" // Specify the default download file name
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* Using iframe to display the selected PDF */}
      <iframe
        src={`${pdfSrc}#toolbar=0`}
        width="100%"
        height="600px"
        title="CV"
        style={{
          border: 'none',
          marginTop: '10px',
        }}
      ></iframe>
    </div>
  );
};

export default Cv;
