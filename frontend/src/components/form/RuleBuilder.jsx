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



function RuleBuilder({ rules = [], onChange, questions = [], sourceQuestion }) {

  const addRule = () => {
    const newRule = {
      if: {
        logic: "AND",
        conditions: [
          {
            questionId: sourceQuestion?.id || "",
            operator: "EQUALS",
            value: ""
          }
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
    <div className="mt-4 border-t border-gray-200 pt-4" onClick={(e) => e.stopPropagation()}>

      {rules.map((rule, index) => {

        const safeRule = {
          if: {
            logic: rule?.if?.logic || "AND",
            conditions:
              (rule?.if?.conditions && rule.if.conditions.length
                ? rule.if.conditions.map(c => ({
                    ...c,
                    operator: "EQUALS" // UI only supports equals; keep it fixed
                  }))
                : [
                    {
                      questionId: sourceQuestion?.id || "",
                      operator: "EQUALS",
                      value: ""
                    }
                  ])
          },
          then: rule?.then || { action: "HIDE", targetQuestionId: "" }
        };

        return (
          <div
            key={index}
            className="mb-3 p-3 rounded-lg border border-gray-200 bg-gray-50 text-sm"
          >

            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-500 font-semibold tracking-wide text-xs mr-1">
                IF
              </span>
            </div>

            {safeRule.if.conditions.map((cond, condIndex) => {

              // 🔵 CHANGED — Always derive condition source question safely
              const conditionSourceQuestion =
                sourceQuestion ||
                questions.find(q => q.id === cond.questionId) ||
                null;

              return (
                <div key={condIndex} className="w-full">
                  <div className="flex items-center gap-2">

                    {/* Source Question (scoped to current question if provided) */}
                    {sourceQuestion ? (
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                        {sourceQuestion.label || "This question"}
                      </span>
                    ) : (
                      <select
                        value={cond.questionId}
                        onChange={(e) => {
                          const updated = [...rules];

                          // 🔵 CHANGED — reset condition when question changes
                          updated[index].if.conditions[condIndex] = {
                            questionId: e.target.value,
                            operator: "EQUALS",
                            value: ""
                          };

                          onChange(updated);
                        }}
                        className="border px-2 py-1 rounded"
                      >
                        <option value="">Question</option>
                        {questions.map(q => (
                          <option key={q.id} value={q.id}>
                            {q.label || q.id}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Visual operator — equals is implicit, so show arrow only */}
                    <span className="text-gray-400 text-lg mx-1">
                      →
                    </span>

                    {/* Value */}
                    {Array.isArray(conditionSourceQuestion?.options) &&
                     conditionSourceQuestion.options.length > 0 ? (

                      <select
                        value={cond.value}
                        onChange={(e) => {
                          const updated = [...rules];
                          const conditionRef =
                            updated[index].if.conditions[condIndex];
                          conditionRef.value = e.target.value;
                          if (sourceQuestion) {
                            conditionRef.questionId = sourceQuestion.id;
                          }
                          onChange(updated);
                        }}
                        className="border px-2 py-1 rounded bg-white"
                      >
                        <option value="">value</option>
                        {conditionSourceQuestion.options.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>

                    ) : (

                      <input
                        value={cond.value}
                        onChange={(e) => {
                          const updated = [...rules];
                          const conditionRef =
                            updated[index].if.conditions[condIndex];
                          conditionRef.value = e.target.value;
                          if (sourceQuestion) {
                            conditionRef.questionId = sourceQuestion.id;
                          }
                          onChange(updated);
                        }}
                        className="border px-2 py-1 rounded bg-white"
                      />

                    )}
                  </div>

                  {/* Logic operator between conditions (appears only when there is a next condition) */}
                  {condIndex < safeRule.if.conditions.length - 1 && (
                    <div className="flex items-center justify-center my-2 text-xs text-gray-500">
                      <select
                        value={safeRule.if.logic}
                        onChange={(e) => {
                          const updated = [...rules];
                          updated[index].if.logic = e.target.value;
                          onChange(updated);
                        }}
                        className="border px-2 py-1 rounded bg-white"
                      >
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                      </select>
                    </div>
                  )}
                </div>
              );
            })}

            {/* + Condition Button */}
            <button
              onClick={() => {
                const updated = [...rules];
                updated[index].if.conditions.push({
                  questionId: sourceQuestion?.id || "",
                  operator:"EQUALS",
                  value:""
                });
                onChange(updated);
              }}
              className="text-blue-600 text-xs ml-1"
            >
              + Condition
            </button>

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
