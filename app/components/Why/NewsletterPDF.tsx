import React, { useEffect, useState } from 'react';

const NewsletterPDF = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageClick = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Informe_Junio_2025.pdf";
    link.download = "Informe_Junio_2025.pdf";
    link.click();
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden bg-white border border-gray-200 flex justify-center items-center p-0" style={{overflowX: 'hidden'}}>
      {isMobile ? (
        <button onClick={handleImageClick} className="w-full focus:outline-none">
          <img
            src="pdf/portada.png"
            alt="Brochure portada"
            className="w-full h-full"
          />
        </button>
      ) : (
        <embed
          src="pdf/Informe_Junio_2025.pdf"
          type="application/pdf"
          className="w-full h-[70vh] md:h-[65vh] max-w-full"
          style={{display: 'block', overflowX: 'hidden'}}
        />
      )}
    </div>
  );
};

export default NewsletterPDF;