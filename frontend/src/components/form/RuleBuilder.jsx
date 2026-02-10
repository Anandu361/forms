function buildRulePreview(rule, questions) {

  if (!rule?.if?.conditions?.length) return "";

  const conditionText = rule.if.conditions.map(cond => {

    const q = questions.find(x => x.id === cond.questionId);
    const label = q?.label || cond.questionId;

    return `${label} equals ${cond.value || "..."}`;
  });

  const logic = rule.if.logic || "AND";

  const thenQ = questions.find(q => q.id === rule.then?.targetQuestionId);
  const thenLabel = thenQ?.label || rule.then?.targetQuestionId;

  return `IF ${conditionText.join(` ${logic} `)} → ${rule.then?.action || ""} ${thenLabel || ""}`;
}



function RuleBuilder({ rules = [], onChange, questions = [] }) {

  const addRule = () => {
    const newRule = {
      if: {
        logic: "AND",
        conditions: [
          { questionId: "", operator: "EQUALS", value: "" }
        ]
      },
      then: {
        action: "HIDE",
        targetQuestionId: ""
      }
    };

    onChange([...(rules || []), newRule]);
  };

  return (
    <div className="mt-4 border-t pt-4">

      {rules.map((rule, index) => {

        // ⭐ SAFETY — ensure structure always exists
        const safeRule = {
          if: {
            logic: rule?.if?.logic || "AND",
            conditions: rule?.if?.conditions || [
              { questionId: "", operator: "EQUALS", value: "" }
            ]
          },
          then: rule?.then || { action: "HIDE", targetQuestionId: "" }
        };

        return (
          <div key={index} className="mb-3 p-3 rounded-md border bg-gray-50 flex flex-wrap items-center gap-2 text-sm">

            <span className="text-gray-500 font-medium">IF</span>

            {safeRule.if.conditions.map((cond, condIndex) => {

              const sourceQuestion = questions.find(q => q.id === cond.questionId);

              return (
                <div key={condIndex} className="flex items-center gap-2">

                  {/* Question */}
                  <select
                    value={cond.questionId}
                    onChange={(e) => {
                      const updated = [...rules];
                      updated[index].if.conditions[condIndex].questionId = e.target.value;
                      onChange(updated);
                    }}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="">Question</option>
                    {questions.map(q => (
                      <option key={q.id} value={q.id}>{q.label || q.id}</option>
                    ))}
                  </select>

                  {/* Operator */}
                  <select
                    value={cond.operator}
                    onChange={(e) => {
                      const updated = [...rules];
                      updated[index].if.conditions[condIndex].operator = e.target.value;
                      onChange(updated);
                    }}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="EQUALS">equals</option>
                  </select>

                  {/* Value */}
                  {sourceQuestion?.options ? (
                    <select
                      value={cond.value}
                      onChange={(e) => {
                        const updated = [...rules];
                        updated[index].if.conditions[condIndex].value = e.target.value;
                        onChange(updated);
                      }}
                      className="border px-2 py-1 rounded"
                    >
                      <option value="">value</option>
                      {sourceQuestion.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value={cond.value}
                      onChange={(e) => {
                        const updated = [...rules];
                        updated[index].if.conditions[condIndex].value = e.target.value;
                        onChange(updated);
                      }}
                      className="border px-2 py-1 rounded"
                    />
                  )}

                  {condIndex > 0 && (
                    <span className="text-gray-400">
                      {safeRule.if.logic}
                    </span>
                  )}

                </div>
              );
            })}

            {/* + Condition Button */}
            <button
              onClick={() => {
                const updated = [...rules];
                updated[index].if.conditions.push({
                  questionId:"",
                  operator:"EQUALS",
                  value:""
                });
                onChange(updated);
              }}
              className="text-blue-600 text-xs ml-1"
            >
              + Condition
            </button>

            {/* Logic selector */}
            <select
              value={safeRule.if.logic}
              onChange={(e) => {
                const updated = [...rules];
                updated[index].if.logic = e.target.value;
                onChange(updated);
              }}
              className="border px-2 py-1 rounded text-xs bg-white"
            >
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </select>

            <span className="text-gray-400 mx-2">→</span>

            <span className="text-gray-500 font-medium">THEN</span>

            {/* Action */}
            <select
              value={safeRule.then.action}
              onChange={(e) => {
                const updated = [...rules];
                updated[index].then.action = e.target.value;
                onChange(updated);
              }}
              className="border px-2 py-1 rounded bg-white"
            >
              <option value="HIDE">Hide</option>
              <option value="SHOW">Show</option>
              <option value="DISABLE">Disable</option>
              <option value="ENABLE">Enable</option>
            </select>

            {/* Target Question */}
            <select
              value={safeRule.then.targetQuestionId}
              onChange={(e) => {
                const updated = [...rules];
                updated[index].then.targetQuestionId = e.target.value;
                onChange(updated);
              }}
              className="border px-2 py-1 rounded bg-white"
            >
              <option value="">Question</option>
              {questions.map(q => (
                <option key={q.id} value={q.id}>{q.label || q.id}</option>
              ))}
            </select>
            
            {/* 🔵 Live Rule Preview */}
            <div className="w-full text-xs text-gray-500 mt-2 italic">
              {buildRulePreview(rule, questions)}
            </div>

          </div>
        );
      })}

      <button
        onClick={addRule}
        className="text-blue-600 text-sm"
      >
        + Add Logic
      </button>

    </div>
  );
}

export default RuleBuilder;
