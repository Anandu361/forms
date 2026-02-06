import React from 'react';

const MultiSelectQuestion = ({ question }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {question.label} {question.required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {question.options?.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`${question.id}-${index}`}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled
            />
            <label htmlFor={`${question.id}-${index}`} className="ml-2 block text-sm text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectQuestion;
