import React, { useState } from 'react';
import { Trash2, Copy, MoreVertical, X, GripHorizontal } from 'lucide-react';
import QuestionRenderer from '../../pages/form/QuestionRenderer'; 




const QuestionTypes = [
  { value: 'short_text', label: 'Short answer' },
  { value: 'long_text', label: 'Paragraph' },
  { value: 'single_select', label: 'Multiple choice' },
  { value: 'multi_select', label: 'Checkboxes' },
  { value: 'dropdown', label: 'Dropdown' },
];


const QuestionCard = ({
  question,
  questions, // for rules
  setAnswers,
  onUpdate,
  onDelete,
  onDuplicate,
  onOpenLogic,
  isActive,
  onClick,
}) => {

  if (!question.ui?.visible) return null;
  const handleChange = (field, value) => {
    onUpdate(question.id, { ...question, [field]: value });
  };
  console.log("CARD VISIBILITY:", question.id, question.ui?.visible);


  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 mb-4 transition-all duration-200 ${
        isActive
          ? 'border-l-8 border-l-blue-600 ring-1 ring-blue-200'
          : 'border-l-8 border-l-transparent hover:shadow-md'
      }`}
      onClick={onClick}
    >
      {/* Drag Handle */}
      <div className="flex justify-center pt-2">
        <GripHorizontal className="text-gray-300 w-6 h-6 rotate-90 transform cursor-move" />
      </div>

      <div className="p-6 pt-0">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Question Label */}
          <div className="flex-grow bg-gray-50 border-b border-gray-300 focus-within:border-blue-500 focus-within:bg-gray-100 transition-colors pt-2 px-2">
            <input
              type="text"
              value={question.label}
              onChange={(e) => handleChange('label', e.target.value)}
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

        {/* ✅ Renderer Preview Area */}
        <div className="mb-6">
          <QuestionRenderer question={question} setAnswers={setAnswers}/>

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

          {/* Required Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Required</span>
            <button
              onClick={() => handleChange('required', !question.required)}
              className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ${
                question.required ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${
                  question.required ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLogic(question.id);
            }}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
          >
            <MoreVertical className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
