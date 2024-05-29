import React, { useState } from 'react';

const fields = [
  'Address',
  'Property Area',
  'Ownership',
  'Cost',
  'Supplemental Addendum',
  'Building Sketch',
  'E&O Insurance',
  'Flood Certificate'
];

function SectionList({ onUpdate }) {
  const [checkedItems, setCheckedItems] = useState(Array(fields.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    const checkedCount = updatedCheckedItems.filter(item => item).length;
    onUpdate(checkedCount, updatedCheckedItems);
  };

  return (
    // <div className="p-4 bg-pink-200 rounded-lg shadow-md dark:bg-gray-800/20 ">
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-600/20 ">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Property Details:</h2>
      <ul className="max-w-md max-h-40 space-y-1 overflow-y-scroll text-gray-500 list-inside dark:text-gray-900">
        {fields.map((field, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-400 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="ml-2">{field}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionList;
