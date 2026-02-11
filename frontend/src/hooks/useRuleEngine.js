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

    const dependencyMap = {};

    questions.forEach(q => {
      q.rules?.forEach(rule => {
        rule.if?.conditions?.forEach(cond => {
          if (!dependencyMap[cond.questionId]) {
            dependencyMap[cond.questionId] = new Set();
          }
          dependencyMap[cond.questionId].add(rule.then.targetQuestionId);
        });
      });
    });

    const appliedActions = {}; // to track applied actions and prevent duplicates
    // 2️⃣ Apply rules
    cloned.forEach(sourceQuestion => {

      // const changedKeys = Object.keys(answers || {});

      // if (
      //   !dependencyMap[sourceQuestion.id] &&
      //   !changedKeys.includes(sourceQuestion.id)
      // ) {
      //   return; // ⬅ skip evaluation
      // }

    if (!sourceQuestion.rules) return;

    [...(sourceQuestion.rules || [])]
      .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
      .forEach(rule => {

      const action = rule?.then?.action;
      const targetId = rule?.then?.targetQuestionId;

      const targetQuestion = findQuestion(targetId);
      if (!targetQuestion) return;


      // ⭐ CONDITION CHECK
    let conditionPassed = true;

    if (rule.if?.conditions?.length) {

      const results = rule.if.conditions.map(cond => {
        const answer = answers?.[cond.questionId];

        if (answer === undefined) return false;

        if (cond.operator === "EQUALS") {
          return answer === cond.value;
        }

        return false;
      });

      const logic = rule.if.logic || "AND";

      if (logic === "AND") {
        conditionPassed = results.every(Boolean);
      } else {
        conditionPassed = results.some(Boolean);
      }
    }

      

      // ⭐ APPLY ACTION ONLY IF TRUE
      if (conditionPassed) {
        targetQuestion.ui.controlledByLogic = true;
        const key = `${targetId}-${action}`;

        // prevent same action applying multiple times
        if (appliedActions[key]) return;

        appliedActions[key] = true;

        if (action === "HIDE") {
          targetQuestion.ui.visible = false;
        }

        if (action === "SHOW") {
          targetQuestion.ui.visible = true;
        }

        if (action === "DISABLE") {
          targetQuestion.ui.enabled = false;
        }

        if (action === "ENABLE") {
          targetQuestion.ui.enabled = true;
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
