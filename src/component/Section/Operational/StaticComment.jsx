import React from 'react';

const comments = {
  'Cost': [
    'It must be 14 billion dollars or above.',
    'It must have tax less than 18%.'
  ],
  'Address': [
    'Address must be complete and accurate.',
    'Include street, city, state, and ZIP code.'
  ],
  'Property Area': [
    'Property area must be measured in square feet.',
    'Include a detailed layout of the property.'
  ],
  'Ownership': [
    'Ownership details must be verified with legal documents.',
    'Include names of all owners and their respective shares.'
  ],
  'Supplemental Addendum': [
    'Supplemental addendum must be signed by all parties.',
    'Include any additional terms agreed upon.'
  ],
  'Building Sketch': [
    'Building sketch must be drawn to scale.',
    'Include all floors and major structural elements.'
  ],
  'E&O Insurance': [
    'E&O insurance policy must be valid for the current year.',
    'Include the policy number and coverage details.'
  ],
  'Flood Certificate': [
    'Flood certificate must be issued by a certified surveyor.',
    'Include the flood zone designation and any applicable risks.'
  ]
};

function StaticComment({ uncheckedFields }) {
  const allComments = uncheckedFields.reduce((acc, field) => {
    return acc.concat(comments[field] || []);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-600/20 max-h-96 overflow-y-auto">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Total Comments ({allComments.length})
      </h3>
      <ol className="list-decimal ml-5 text-gray-700 dark:text-gray-900">
        {allComments.map((comment, index) => (
          <li key={index} className="mb-2">
            {comment}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StaticComment;
