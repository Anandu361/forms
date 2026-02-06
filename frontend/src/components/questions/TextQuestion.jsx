import React from 'react';

const TextQuestion = ({ question }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {question.label} {question.required && <span className="text-red-500">*</span>}
      </label>
      {question.type === 'long_text' ? (
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type your answer here..."
          rows={4}
          disabled
        />
      ) : (
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type your answer here..."
          disabled
        />
      )}
    </div>
  );
};

export default TextQuestion;
