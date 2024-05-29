import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CompareDocImg = ({ pdfFile, syncScroll }) => {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3.0));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      if (e.deltaY > 0) {
        handleZoomOut();
      } else {
        handleZoomIn();
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', syncScroll);
      containerRef.current.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', syncScroll);
        containerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [syncScroll]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex justify-center my-4">
        <div ref={containerRef} className="overflow-auto max-h-96 w-full border-2 border-gray-300 rounded-2xl">
          {file && (
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} renderMode="canvas">
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
              ))}
            </Document>
          )}
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        <button onClick={handleZoomIn} className="px-4 py-2 bg-blue-500 text-white rounded">Zoom In</button>
        <button onClick={handleZoomOut} className="px-4 py-2 bg-blue-500 text-white rounded">Zoom Out</button>
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

export default CompareDocImg;
