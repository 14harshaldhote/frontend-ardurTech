import React from 'react';

function ProgressBar({ progress }) {
  return (
    
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center  leading-none rounded-full"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
