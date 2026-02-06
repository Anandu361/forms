import React from 'react';

const BaseStub = ({ question, type }) => (
  <div className="p-4 border border-dashed border-gray-300 rounded bg-gray-50 text-gray-500 text-center">
    <p className="font-medium text-sm">{question.label}</p>
    <p className="text-xs mt-1">[{type} Input Placeholder]</p>
  </div>
);

export const NumberQuestion = (props) => <BaseStub {...props} type="Number" />;
export const DateQuestion = (props) => <BaseStub {...props} type="Date" />;
export const TimeQuestion = (props) => <BaseStub {...props} type="Time" />;
export const DateTimeQuestion = (props) => <BaseStub {...props} type="DateTime" />;
export const FileQuestion = (props) => <BaseStub {...props} type="File" />;
export const ImageQuestion = (props) => <BaseStub {...props} type="Image" />;
export const VideoQuestion = (props) => <BaseStub {...props} type="Video" />;
export const AudioQuestion = (props) => <BaseStub {...props} type="Audio" />;
export const LocationQuestion = (props) => <BaseStub {...props} type="Location" />;
export const RatingQuestion = (props) => <BaseStub {...props} type="Rating" />;
export const CheckboxQuestion = (props) => <BaseStub {...props} type="Checkbox" />;
export const RadioQuestion = (props) => <BaseStub {...props} type="Radio" />;
