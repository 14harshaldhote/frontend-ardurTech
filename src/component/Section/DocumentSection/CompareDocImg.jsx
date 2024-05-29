import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CompareDocImg = ({ pdfFile, syncScroll }) => {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const renderFile = (file) => {
    if (!file) return null;
    const fileType = file.type.split('/')[0];

    if (fileType === 'image') {
      return <img src={URL.createObjectURL(file)} alt="Document" className="w-full h-auto" />;
    } else if (fileType === 'application' && file.type === 'application/pdf') {
      return (
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      );
    }
    return <p>Unsupported file type</p>;
  };

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

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center my-4">
        <div ref={containerRef} className="overflow-auto max-h-96 w-full border-2 border-gray-300 rounded-2xl">
          {renderFile(file)}
        </div>
      </div>
      <input
        type="file"
        onChange={handleFileUpload}
        accept="image/*,application/pdf"
        className="my-2"
      />
    </div>
  );
};

export default CompareDocImg;
