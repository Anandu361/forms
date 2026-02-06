import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from '../../components/form/QuestionCard';
import FloatingToolbar from '../../components/form/FloatingToolbar';
import useRuleEngine from '../../hooks/useRuleEngine';

function FormBuilder() {
  const { title, setTitle } = useOutletContext();
  const [description, setDescription] = useState('');
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([
    {
      id: "q1",
      type: "single_select",
      label: "Question 1",
      options: ["Option 1"],
      required: false,
      validation: {},
      rules: [
        {
          if: {
            questionId: "q1",
            operator: "EQUALS",
            value: "Option 1"
          },
          then: {
            action: "HIDE",
            targetQuestionId: "q2"
          }
        }
      ],
      ui: { visible: true, enabled: true }
    },
    {
      id: "q2",
      type: "single_select",
      label: "Question 2",
      options: ["Option 1"],
      required: false,
      validation: {},
      rules: [],
      ui: { visible: true, enabled: true }
    }
  ]);
  const [activeQuestionId, setActiveQuestionId] = useState(questions[0].id);

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      type: 'single_select',
      label: '',
      options: ['Option 1'],
      required: false,
      validation: {},
      rules: [],
      ui: {
        visible: true,
        enabled: true
      }
    };
    setQuestions([...questions, newQuestion]);
    setActiveQuestionId(newQuestion.id);
  };

  const evaluatedQuestions = useRuleEngine(questions, answers);

  console.log("QUESTIONS STATE:", questions);
  console.log("EVALUATED QUESTIONS:", evaluatedQuestions);


  const updateQuestion = (id, updatedQuestion) => {
    setQuestions(questions.map(q => q.id === id ? updatedQuestion : q));
  };

  const deleteQuestion = (id) => {
    const newQuestions = questions.filter(q => q.id !== id);
    setQuestions(newQuestions);
    if (activeQuestionId === id && newQuestions.length > 0) {
      setActiveQuestionId(newQuestions[newQuestions.length - 1].id);
    }
  };

  const duplicateQuestion = (id) => {
    const questionToDuplicate = questions.find(q => q.id === id);
    if (questionToDuplicate) {
      const newQuestion = {
        ...questionToDuplicate,
        id: Date.now().toString(),
      };
      const index = questions.findIndex(q => q.id === id);
      const newQuestions = [...questions];
      newQuestions.splice(index + 1, 0, newQuestion);
      setQuestions(newQuestions);
      setActiveQuestionId(newQuestion.id);
    }
  };

  return (
    <div className='max-w-3xl mx-auto mt-6 relative pl-4 pr-16 sm:px-0 pb-20'>
      {/* Form Header Card */}
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-200 border-t-8 border-t-blue-700 mb-4 p-6 ${activeQuestionId === 'header' ? 'ring-1 ring-blue-200' : ''}`}
        onClick={() => setActiveQuestionId('header')}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-3xl w-full font-bold mb-4 outline-none border-b border-gray-100 focus:border-blue-700 pb-2 text-gray-800 placeholder-gray-400"
          placeholder="Form Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full text-md text-gray-600 outline-none resize-none border-b border-gray-100 focus:border-gray-300 pb-1 placeholder-gray-400"
          placeholder="Form description"
          rows={1}

          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        />
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {evaluatedQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            onUpdate={updateQuestion}
            onDelete={deleteQuestion}
            onDuplicate={duplicateQuestion}
            isActive={activeQuestionId === q.id}
            onClick={() => setActiveQuestionId(q.id)}
            setAnswers={setAnswers}
          />
        ))}
      </div>

      {/* Floating Toolbar */}
      <div className="absolute -right-16 top-0 hidden sm:block">
        <FloatingToolbar onAddQuestion={addQuestion} />
      </div>
      {/* Mobile Floating Action Button fall back */}
      <div className="sm:hidden fixed bottom-6 right-6 z-10">
        <button onClick={addQuestion} className="bg-white p-4 rounded-full shadow-lg text-blue-600 border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
        </button>
      </div>
    </div>
  )
}

export default FormBuilder
