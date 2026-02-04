import React, { useState } from 'react';
import { MessageSquare, Download } from 'lucide-react';

function FormResponses() {
  const [acceptingResponses, setAcceptingResponses] = useState(true);

  // Mock data simulation
  const responseCount = 3;

  return (
    <div className='max-w-3xl mx-auto mt-6 pb-20 px-4'>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-3xl font-normal">{responseCount} responses</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded text-sm">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              Spreadsheet
            </div>
            <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
          <div className="text-sm font-medium text-gray-700">Accepting responses</div>
          <button
            onClick={() => setAcceptingResponses(!acceptingResponses)}
            className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${acceptingResponses ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ease-in-out ${acceptingResponses ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>
      </div>

      {/* Mock Chart / Summary */}
      {responseCount > 0 ? (
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-base font-medium mb-4">Who is the best cricketer?</h3>
            <div className="text-sm text-gray-500 mb-2">3 responses</div>

            {/* Fake Chart */}
            <div className="flex h-40 items-end gap-8 pl-4 border-l border-gray-200 border-b pb-2">
              <div className="w-16 bg-blue-500 rounded-t h-[60%] relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">Details...</div>
              </div>
              <div className="w-16 bg-red-500 rounded-t h-[30%]"></div>
              <div className="w-16 bg-yellow-500 rounded-t h-[90%]"></div>
            </div>
            <div className="flex gap-8 pl-4 text-xs text-gray-500 mt-2">
              <div className="w-16 text-center">Option 1</div>
              <div className="w-16 text-center">Option 2</div>
              <div className="w-16 text-center">Option 3</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-base font-medium mb-4">Feedback</h3>
            <div className="text-sm text-gray-500 mb-4">3 responses</div>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded text-sm">"Great form builder!"</div>
              <div className="bg-gray-50 p-3 rounded text-sm">"Needs more colors."</div>
              <div className="bg-gray-50 p-3 rounded text-sm">"Very intuitive."</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Waiting for responses</p>
        </div>
      )}
    </div>
  )
}

export default FormResponses
