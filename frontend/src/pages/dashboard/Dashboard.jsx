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
    { id: 1, title: 'Contact Information', last_opened: '6:30 PM', status: 'Active' },
    { id: 2, title: 'Party Invite', last_opened: 'Feb 14', status: 'Active' },
    { id: 3, title: 'RSVP', last_opened: 'Jan 28', status: 'Disabled' },
    { id: 4, title: 'Event Registration', last_opened: 'Jan 20', status: 'Disabled' },
  ];

  return (
    <div className='min-h-screen bg-white'>

      {/* Recent Forms Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-0 py-8">
        <div className="flex items-center justify-between mb-4 px-4">
          <h2 className="text-gray-800 text-base font-medium">Recent forms</h2>
          <div className="flex items-center gap-4">
            <button onClick={handleCreateForm} className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create new form
            </button>
            <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
          {recentForms.map(form => (
            <Cards key={form.id} id={form.id} title={form.title} last_opened={form.last_opened} status={form.status} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
