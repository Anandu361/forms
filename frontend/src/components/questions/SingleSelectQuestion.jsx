import React from 'react';

const SingleSelectQuestion = ({ question, setAnswers }) => {
  const handleChange = (value) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: value
    }));
  };

  return (
    <div>
      {question.options?.map((opt, i) => (
        <label key={i} className="flex items-center gap-2">
          <input
            type="radio"
            name={question.id}
            value={opt}
            onChange={() => {
              console.log("CLICKED", opt);
              handleChange(opt);
            }}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default SingleSelectQuestion;
