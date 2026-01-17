import React from 'react'

function FormBuilder() {
  return (
    <div className='p-4'>
      <div className='flex flex-row border-b border-gray-700 pb-4 mb-4'>
        <h1 className='text-2xl font-bold'>Title</h1>
        <div className='ml-auto flex gap-4'>
          <button className='text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5'>Preview</button>
          <button className='text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 '>Responses</button>
          <button className='text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5'>Settings</button>
        </div>
      </div>
      <div>
        <button className='text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5'>Add question</button>
        <div className='mt-4 rounded-lg p-4 shadow-lg h-100 bg-gray-50 border border-gray-200 flex items-center justify-center'>
          <p className='text-center text-gray-600 align-text-bottom'>Add questions to edit</p>
        </div>
      </div>
    </div>
  )
}

export default FormBuilder
