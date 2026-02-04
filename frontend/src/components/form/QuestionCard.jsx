import React, { useState, useEffect } from 'react';
import { Trash2, Copy, MoreVertical, X, GripHorizontal, Image as ImageIcon } from 'lucide-react';

const QuestionTypes = [
  { value: 'short_answer', label: 'Short answer' },
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'multiple_choice', label: 'Multiple choice' },
  { value: 'checkbox', label: 'Checkboxes' },
  { value: 'dropdown', label: 'Dropdown' },
];

const QuestionCard = ({ question, onUpdate, onDelete, onDuplicate, isActive, onClick }) => {

  const handleChange = (field, value) => {
    onUpdate(question.id, { ...question, [field]: value });
  };

  const handleOptionChange = (idx, value) => {
    const newOptions = [...question.options];
    newOptions[idx] = value;
    handleChange('options', newOptions);
  };

  const addOption = () => {
    handleChange('options', [...(question.options || []), `Option ${(question.options?.length || 0) + 1}`]);
  };

  const removeOption = (idx) => {
    const newOptions = question.options.filter((_, i) => i !== idx);
    handleChange('options', newOptions);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 mb-4 transition-all duration-200 ${isActive ? 'border-l-8 border-l-blue-600 ring-1 ring-blue-200' : 'border-l-8 border-l-transparent hover:shadow-md'}`}
      onClick={onClick}
    >
      {/* Drag Handle (Visual only for now) */}
      <div className="flex justify-center pt-2">
        <GripHorizontal className="text-gray-300 w-6 h-6 rotate-90 transform cursor-move" />
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Question Title */}
          <div className='flex-grow bg-gray-50 border-b border-gray-300 focus-within:border-blue-500 focus-within:bg-gray-100 transition-colors pt-2 px-2'>
            <input
              type="text"
              value={question.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Question"
              className="w-full bg-transparent text-lg p-2 focus:outline-none"
            />
          </div>


          {/* Question Type Selector */}
          <div className="md:w-64">
            <select
              value={question.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-blue-500 bg-white"
            >
              {QuestionTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Body / Answer Area */}
        <div className="mb-6">
          {question.type === 'short_answer' && (
            <div className="border-b border-gray-300 border-dashed py-2 w-1/2 text-gray-400 text-sm">Short answer text</div>
          )}

          {question.type === 'paragraph' && (
            <div className="border-b border-gray-300 border-dashed py-2 w-3/4 text-gray-400 text-sm">Long answer text</div>
          )}

          {['multiple_choice', 'checkbox', 'dropdown'].includes(question.type) && (
            <div className="space-y-2">
              {question.options?.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  {question.type === 'multiple_choice' && <div className="w-4 h-4 rounded-full border border-gray-400 flex-shrink-0" />}
                  {question.type === 'checkbox' && <div className="w-4 h-4 rounded-sm border border-gray-400 flex-shrink-0" />}
                  {question.type === 'dropdown' && <span className='text-gray-500 text-sm flex-shrink-0'>{idx + 1}.</span>}

                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    className="flex-grow p-1 hover:border-b hover:border-gray-200 focus:border-b-2 focus:border-blue-500 focus:outline-none transition-colors"
                  />

                  {question.options.length > 1 && (
                    <button onClick={() => removeOption(idx)} className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600">
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-2 mt-2">
                {(question.type === 'multiple_choice' || question.type === 'dropdown') && <div className="w-4 h-4 rounded-full border border-transparent flex-shrink-0" />}
                {question.type === 'checkbox' && <div className="w-4 h-4 rounded-sm border border-transparent flex-shrink-0" />}
                <button
                  onClick={addOption}
                  className="text-gray-500 hover:text-blue-600 text-sm py-1"
                >
                  Add option
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end border-t border-gray-200 pt-4 gap-4">
          <button
            onClick={() => onDuplicate(question.id)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
            title="Duplicate"
          >
            <Copy className="w-5 h-5" />
          </button>

          <button
            onClick={() => onDelete(question.id)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
            title="Delete"
          >
            <Trash2 className="w-5 h-5" />
          </button>

          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Required</span>
            <button
              onClick={() => handleChange('required', !question.required)}
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${question.required ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ease-in-out ${question.required ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>

          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full" title="More options">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
