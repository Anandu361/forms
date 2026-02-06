import React from 'react';
import SingleSelectQuestion from '../../components/questions/SingleSelectQuestion';
import MultiSelectQuestion from '../../components/questions/MultiSelectQuestion';
import ShortTextQuestion from '../../components/questions/ShortTextQuestion';
import LongTextQuestion from '../../components/questions/LongTextQuestion';
import DropdownQuestion from '../../components/questions/DropdownQuestion';
import {
    NumberQuestion,
    DateQuestion,
    TimeQuestion,
    DateTimeQuestion,
    FileQuestion,
    ImageQuestion,
    VideoQuestion,
    AudioQuestion,
    LocationQuestion,
    RatingQuestion,
    CheckboxQuestion,
    RadioQuestion
} from '../../components/questions/OtherQuestions';

const QUESTION_COMPONENT_MAP = {
        short_text: ShortTextQuestion,
        long_text: LongTextQuestion,
        single_select: SingleSelectQuestion,
        multi_select: MultiSelectQuestion,
        dropdown: DropdownQuestion,
        number: NumberQuestion,
        date: DateQuestion,
        time: TimeQuestion,
        file: FileQuestion
    }


function QuestionRenderer({ question, setAnswers }) {

    
    const Component = QUESTION_COMPONENT_MAP[question.type];
    if (!Component) {
        return <div>Unsupported question type</div>;
    }

    // if (!question.ui?.visible) return null;

    return (
        <div className={question.ui.enabled ? "" : "opacity-50 pointer-events-none"}>
            <Component question={question} setAnswers={setAnswers} />
        </div>
    );



}

export default QuestionRenderer