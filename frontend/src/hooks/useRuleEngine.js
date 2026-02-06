import { useMemo } from "react";

function useRuleEngine(questions, answers) {

  const evaluatedQuestions = useMemo(() => {

    // 1️⃣ Deep clone questions and reset UI
    const cloned = questions.map(q => ({
      ...q,
      ui: {
        visible: true,
        enabled: true
      }
    }));

    // Helper to find question inside cloned array
    const findQuestion = (id) => cloned.find(q => q.id === id);

    // 2️⃣ Apply rules
    cloned.forEach(sourceQuestion => {

    if (!sourceQuestion.rules) return;

    sourceQuestion.rules.forEach(rule => {

      const action = rule?.then?.action;
      const targetId = rule?.then?.targetQuestionId;

      const targetQuestion = findQuestion(targetId);
      if (!targetQuestion) return;

      // ⭐ CONDITION CHECK
      let conditionPassed = true;

      if (rule.if) {
        const { questionId, operator, value } = rule.if;
        const answer = answers[questionId];

        // If unanswered → do NOT run rule
        if (answer === undefined) conditionPassed = false;

        if (operator === "EQUALS" && answer !== value) {
          conditionPassed = false;
        }
      }

      // ⭐ APPLY ACTION ONLY IF TRUE
      if (conditionPassed) {
        if (action === "HIDE") {
          targetQuestion.ui.visible = false;
        }
      }

    });

  });


    console.log("Evaluated Questions:", cloned); // 👈 TEMP DEBUG

    return cloned;

  }, [questions, answers]);
  console.log("Answers:", answers);

  return evaluatedQuestions;
}

export default useRuleEngine;
