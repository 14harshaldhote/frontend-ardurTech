import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CompareDocImg = ({ pdfFile, syncScroll }) => {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

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

  const handleClose = () => {
    setFile(null);
    setNumPages(null);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', syncScroll);
      containerRef.current.addEventListener('wheel', handleWheel);
      setContainerWidth(containerRef.current.clientWidth);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', syncScroll);
        containerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [syncScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <div className="w-full flex justify-center my-4 relative">
        <div ref={containerRef} className="overflow-auto max-h-full w-full border-2 border-gray-300 rounded-2xl bg-slate-200/50 flex-1 relative">
          {file && (
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={containerWidth * scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          )}
          {file && (
            <div className="fixed top-2 right-2 flex space-x-2">
              <button onClick={handleZoomIn} className="p-2 bg-blue-500/50 hover:bg-blue-500 text-white rounded-full">
                <ZoomInIcon />
              </button>
              <button onClick={handleZoomOut} className="p-2 bg-blue-500/50 hover:bg-blue-500 text-white rounded-full">
                <ZoomOutIcon />
              </button>
              <button onClick={handleClose} className="p-2 bg-red-500/50 hover:bg-red-500 text-white rounded-full">
                <CloseIcon />
              </button>
            </div>
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

export default CompareDocImg;
