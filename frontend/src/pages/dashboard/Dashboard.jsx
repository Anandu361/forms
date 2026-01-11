import React from 'react'

function Dashboard() {
  return (
      <div>
        <div className='flex flex-row border-b border-gray-700 pb-4 mb-4'>
          <h1 className='text-2xl font-semibold'>My Forms</h1>
          <button className='ml-auto text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-4 py-2.5 text-center leading-5'>Create New Form</button>
        </div>
        <br />
        <div>
          <h2>Forms</h2>
        </div>
      </div>
  )
}

export default Dashboard
