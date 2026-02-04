import React from 'react';
import { PlusCircle, FileUp, Type, Image, Video, Split } from 'lucide-react';

const FloatingToolbar = ({ onAddQuestion }) => {
  return (
    <div className="fixed sm:static right-4 top-1/2 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg border border-gray-200">
      <button
        onClick={onAddQuestion}
        className="p-2 rounded-full hover:bg-gray-100 group relative flex justify-center"
        title="Add Question"
      >
        <PlusCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 group relative flex justify-center" title="Import Questions">
        <FileUp className="w-5 h-5 text-gray-500 group-hover:text-gray-800" />
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 group relative flex justify-center" title="Add Title and Description">
        <Type className="w-5 h-5 text-gray-500 group-hover:text-gray-800" />
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 group relative flex justify-center" title="Add Image">
        <Image className="w-5 h-5 text-gray-500 group-hover:text-gray-800" />
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 group relative flex justify-center" title="Add Video">
        <Video className="w-5 h-5 text-gray-500 group-hover:text-gray-800" />
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 group relative flex justify-center" title="Add Section">
        <Split className="w-5 h-5 text-gray-500 group-hover:text-gray-800" />
      </button>
    </div>
  );
};

export default FloatingToolbar;
