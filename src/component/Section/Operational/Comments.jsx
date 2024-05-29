import React from 'react';

function Comments() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800/20">
      <textarea
        className="w-full text-black p-2 mb-4 border border-gray-300 rounded dark:bg-gray-200 dark:border-gray-600 "
        rows="4"
        // defaultValue="name mismatched in ownership and registration"
        // readOnly
      />
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800">
          Pin
        </button>
        <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700 dark:bg-amber-600 dark:hover:bg-orange-700">
          Send
        </button>
      </div>
    </div>
  );
}

export default Comments;
