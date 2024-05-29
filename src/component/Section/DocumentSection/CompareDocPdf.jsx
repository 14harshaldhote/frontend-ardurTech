import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CompareDocPdf = ({ setPdfFile, syncScroll }) => {
  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', syncScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', syncScroll);
      }
    };
  }, [syncScroll]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setPdf(file);
    setPdfFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center my-4">
        <div ref={containerRef} className="overflow-auto max-h-96 w-full border-2 border-gray-300 rounded-2xl">
          {pdf && (
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          )}
        </div>
      </div>
      <input
        type="file"
        onChange={handleFileUpload}
        accept="application/pdf"
        className="my-2"
      />
    </div>
  );
};

export default CompareDocPdf;
