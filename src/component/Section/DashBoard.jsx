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
  const [uncheckedFields, setUncheckedFields] = useState(fields);
  const pdfImgRef = useRef(null);
  const pdfPdfRef = useRef(null);

  const syncScroll = (e) => {
    const otherRef = e.target === pdfImgRef.current ? pdfPdfRef.current : pdfImgRef.current;
    if (otherRef) {
      otherRef.scrollTop = e.target.scrollTop;
    }
  };

  const handleUpdate = (count, checkedItems) => {
    setCheckedCount(count);
    const newUncheckedFields = fields.filter((_, index) => !checkedItems[index]);
    setUncheckedFields(newUncheckedFields);
  };

  const totalItems = fields.length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <div className="flex flex-col h-screen rounded-lg">
      <div className="flex justify-center p-3">
        <div className="w-3/4">
          <ProgressBar progress={progress} />
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/5 bg-slate-200/50 p-4 overflow-auto pt-2 rounded-lg">
          <div className="mb-4">
            <SectionList onUpdate={handleUpdate} />
          </div>
          <div className="mb-4">
            <StaticComment uncheckedFields={uncheckedFields} />
          </div>
          <div className="mb-4">
            <Comments />
          </div>
        </div>
        <div className="w-4/5 flex flex-col bg-slate-800/10 overflow-hidden rounded-lg p-2">
          <div className="flex-1 overflow-auto mb-2">
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
