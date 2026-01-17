import React from 'react'
import Cards from '../../components/common/Cards';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();
  return (
      <div>
        <div className='flex flex-row border-b border-gray-700 pb-4 mb-4'>
          <h1 className='text-2xl font-semibold'>Welcome, User</h1>
          <button className='ml-auto text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5' onClick={() => navigate('/forms/new')}>Create New Form</button>
        </div>
        <br />
        <div>
          <h2>Forms</h2>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <Cards id={123} title="Customer Feedback" status="Active" />
          <Cards id={124} title="Event Registration" status="Inactive" />
          <Cards id={125} title="Survey Form" status="Active" />
          <Cards id={126} title="Job Application" status="Active" />
          <Cards id={127} title="Product Review" status="Inactive" />
          <Cards id={128} title="Contact Us" status="Active" />
        </div>
      </div>
  )
}

export default Dashboard
