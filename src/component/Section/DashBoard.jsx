import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import ListSection from './ListSection';
import './Dashboard.css';
import CompareDocImg from './DocumentSection/CompareDocImg';
import CompareDocPdf from './DocumentSection/CompareDocPdf';

function Dashboard() {
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <div className="flex">
      <div className="w-1/5 bg-gray-200 p-4">
        <ProgressBar />
      </div>
      <div className="w-4/5 flex flex-col p-11">
        <div className="flex-1">
          <CompareDocImg pdfFile={pdfFile} />
        </div>
        <div className="flex-1">
          <CompareDocPdf setPdfFile={setPdfFile} />
        </div>
      </div>
      <ListSection />
    </div>
  );
}

export default Dashboard;
