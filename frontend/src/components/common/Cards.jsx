import React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, FileText } from 'lucide-react';

function Cards({ id, title, lastOpened, icon }) {
  return (
    <div className="group cursor-pointer">
      <Link to={`/forms/${id}/edit`}>
        <div className="bg-white border border-gray-200 rounded-lg hover:border-blue-600 transition-colors overflow-hidden h-40 flex items-center justify-center bg-gray-50 relative">
          {/* Thumbnail placeholder */}
          {icon ? (
            <div className="text-blue-600">{icon}</div>
          ) : (
            <FileText className="w-12 h-12 text-blue-200" />
          )}
        </div>
      </Link>
      <div className="mt-2 flex items-start justify-between px-1">
        <div>
          <div className="text-sm font-medium text-gray-800 truncate w-40">{title}</div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-[10px] text-white">F</div>
            Opened {lastOpened}
          </div>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Cards
