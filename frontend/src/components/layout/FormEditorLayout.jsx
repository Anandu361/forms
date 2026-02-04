import React, { useState } from 'react';
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Home } from 'lucide-react';

const FormEditorLayout = ({ title, setTitle }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-blue-50 flex flex-col'>
      {/* Top Navigation / Header */}
      <div className='bg-white shadow-sm pt-4 px-4 sticky top-0 z-20'>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/dashboard')} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
                <Home className="w-4 h-4" />
              </div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg font-medium text-gray-700 hover:bg-gray-100 px-2 py-1 rounded focus:outline-none focus:border-b-2 focus:border-blue-600 bg-transparent transition-colors"
                placeholder="Untitled Form"
              />
            </div>

            <div className='flex gap-2 sm:gap-4'>
              <button className='text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center gap-2 transition-colors'>
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
              <div className="w-9 h-9 bg-blue-100 rounded-full text-blue-700 flex items-center justify-center font-semibold border border-blue-200">
                U
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 text-sm font-medium text-gray-500">
            <NavLink
              to={`/forms/${id}/edit`}
              end
              className={({ isActive }) =>
                `pb-3 px-4 border-b-2 transition-colors ${isActive ? 'border-blue-700 text-blue-700' : 'border-transparent hover:text-blue-700'}`
              }
            >
              Questions
            </NavLink>
            <NavLink
              to={`/forms/${id}/responses`}
              className={({ isActive }) =>
                `pb-3 px-4 border-b-2 transition-colors ${isActive ? 'border-blue-700 text-blue-700' : 'border-transparent hover:text-blue-700'}`
              }
            >
              Responses
            </NavLink>
            <NavLink
              to={`/forms/${id}/settings`}
              className={({ isActive }) =>
                `pb-3 px-4 border-b-2 transition-colors ${isActive ? 'border-blue-700 text-blue-700' : 'border-transparent hover:text-blue-700'}`
              }
            >
              Settings
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <Outlet context={{ title, setTitle }} />
      </div>
    </div>
  );
};

export default FormEditorLayout;
