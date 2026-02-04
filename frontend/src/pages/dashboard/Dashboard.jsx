import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Cards from '../../components/common/Cards';

function Dashboard() {
  const navigate = useNavigate();

  const handleCreateForm = () => {
    // Simple random ID generation since we don't have uuid package
    const newFormId = Math.random().toString(36).substring(2, 15);
    navigate(`/forms/${newFormId}/edit`);
  };

  const recentForms = [
    { id: 1, title: 'Contact Information', lastOpened: '6:30 PM' },
    { id: 2, title: 'Party Invite', lastOpened: 'Feb 14' },
    { id: 3, title: 'RSVP', lastOpened: 'Jan 28' },
    { id: 4, title: 'Event Registration', lastOpened: 'Jan 20' },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Template Gallery Section */}
      <div className='bg-gray-100 pb-8 pt-4 px-4 sm:px-0 border-b border-gray-200'>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-4">
            <h2 className="text-gray-600 text-base font-medium">Start a new form</h2>
            <button className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5">Template gallery</button>
          </div>

          <div className="flex gap-4 px-4 overflow-x-auto pb-2">
            {/* Blank Form */}
            <div className="group cursor-pointer min-w-[120px]" onClick={handleCreateForm}>
              <div className="bg-white border border-gray-200 rounded hover:border-blue-600 transition-colors h-32 flex items-center justify-center shadow-sm">
                <Plus className="w-10 h-10 text-red-500 from-blue-500 to-blue-500" style={{ color: '#D93025' }} />
              </div>
              <div className="mt-2 text-sm font-medium text-gray-800">Blank form</div>
            </div>

            {/* Templates mocks */}
            {['Contact Information', 'RSVP', 'Party Invite'].map((t, i) => (
              <div key={i} className="group cursor-pointer min-w-[120px]">
                <div className="bg-white border border-gray-200 rounded hover:border-blue-600 transition-colors h-32 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-50 flex items-center justify-center text-blue-200 text-xs">Template Preview</div>
                </div>
                <div className="mt-2 text-sm font-medium text-gray-800">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Forms Section */}
      <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-0">
        <div className="flex items-center justify-between mb-4 px-4">
          <h2 className="text-gray-800 text-base font-medium">Recent forms</h2>
          <div className="flex items-center gap-4">
            <select className="bg-transparent text-sm text-gray-600 font-medium focus:outline-none">
              <option>Owned by anyone</option>
              <option>Owned by me</option>
              <option>Not owned by me</option>
            </select>
            <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
          {recentForms.map(form => (
            <Cards key={form.id} id={form.id} title={form.title} lastOpened={form.lastOpened} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
