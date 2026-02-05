

function QuestionRenderer({question}) {
    switch (question.type) {
        case 'single_select':
            return <SingleSelectQuestion question={question} />;
        case 'multi_select':
            return <MultiSelectQuestion question={question} />;
        case 'text':
            return <TextQuestion question={question} />;
        case 'number':
            return <NumberQuestion question={question} />;
        case 'date':
            return <DateQuestion question={question} />;
        case 'time':
            return <TimeQuestion question={question} />;
        case 'datetime':
            return <DateTimeQuestion question={question} />;
        case 'file':
            return <FileQuestion question={question} />;
        case 'image':
            return <ImageQuestion question={question} />;
        case 'video':
            return <VideoQuestion question={question} />;
        case 'audio':
            return <AudioQuestion question={question} />;
        case 'location':
            return <LocationQuestion question={question} />;
        case 'rating':
            return <RatingQuestion question={question} />;
        case 'checkbox':
            return <CheckboxQuestion question={question} />;
        case 'radio':
            return <RadioQuestion question={question} />;
        case 'dropdown':
            return <DropdownQuestion question={question} />;
        default:
            return <TextQuestion question={question} />;
    }
}

export default QuestionRenderer