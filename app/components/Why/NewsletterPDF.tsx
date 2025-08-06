import React from 'react';

const NewsletterPDF = () => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden bg-white border border-gray-200 flex justify-center items-center p-0" style={{overflowX: 'hidden'}}>
      <embed
        src="pdf/Brochure_Criteria.pdf"
        type="application/pdf"
        className="w-full h-[60vh] sm:h-[70vh] md:h-[65vh] max-w-full"
        style={{display: 'block', overflowX: 'hidden'}}
      />
    </div>
  );
};

export default NewsletterPDF;