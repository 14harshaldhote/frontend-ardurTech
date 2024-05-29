import React from 'react';

function StaticComment() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800/20">
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded dark:bg-gray-700/55 dark:border-gray-600 dark:text-white"
        rows="4"
        defaultValue="name mismatched in ownership and registration"
        readOnly
      />
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800">
          Save
        </button>
        <button className="px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-700 dark:bg-amber-600 dark:hover:bg-orange-700">
          Save Next
        </button>
      </div>
    </div>
  );
}

export default StaticComment;
