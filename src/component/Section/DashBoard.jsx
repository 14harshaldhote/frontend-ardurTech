import React, { useState, useRef } from 'react';
import ProgressBar from './ProgressBar';
import ListSection from './ListSection';
import CompareDocImg from './DocumentSection/CompareDocImg';
import CompareDocPdf from './DocumentSection/CompareDocPdf';
import SectionList from './Operational/SectionList';
import StaticComment from './Operational/StaticComment';
import Comments from './Operational/Comments';
import './Dashboard.css';
import { fields } from './fields';

function Dashboard() {
  const [pdfFile, setPdfFile] = useState(null);
  const [checkedCount, setCheckedCount] = useState(0);
  const pdfImgRef = useRef(null);
  const pdfPdfRef = useRef(null);

  const syncScroll = (e) => {
    const otherRef = e.target === pdfImgRef.current ? pdfPdfRef.current : pdfImgRef.current;
    if (otherRef) {
      otherRef.scrollTop = e.target.scrollTop;
    }
  };

  const handleUpdate = (count) => {
    setCheckedCount(count);
  };

  const totalItems = fields.length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full p-20">
        <ProgressBar progress={progress} />
      </div>
      <div className="flex flex-1">
        <div className="w-1/5 bg-gray-200 p-4 overflow-auto">
          <SectionList onUpdate={handleUpdate} />
          <StaticComment />
          <Comments />
        </div>
        <div className="w-4/5 flex flex-col bg-gray-400 overflow-auto">
          <div className="flex-1 overflow-auto">
            <CompareDocImg ref={pdfImgRef} pdfFile={pdfFile} syncScroll={syncScroll} />
          </div>
          <div className="flex-1 overflow-auto">
            <CompareDocPdf ref={pdfPdfRef} setPdfFile={setPdfFile} syncScroll={syncScroll} />
          </div>
        </div>
        <ListSection />
      </div>
    </div>
  );
}

export default Dashboard;
