import React from 'react';

const ShortTextQuestion = ({ question }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {question.label} {question.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="Short answer text"
        disabled
      />
    </div>
  );
};

export default ShortTextQuestion;
