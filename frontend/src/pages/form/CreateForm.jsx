import React from 'react'
import { useNavigate } from 'react-router-dom';

function CreateForm() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Create New Form</h1>
      <form className='max-w-lg bg-white p-6 rounded-lg shadow-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2' htmlFor='formTitle'>
            Form Title
          </label>
          <input
            type='text'
            id='formTitle'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter form title'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2' htmlFor='formDescription'>
            Form Description
          </label>
          <textarea
            id='formDescription'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter form description'
            rows='4'
          ></textarea>
        </div>
        <button
          type='submit'
          className='ml-auto text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5'
          onClick={() => navigate('/forms/:id/edit')}
        >
          Create Form
        </button>
      </form>
    </div>
  )
}

export default CreateForm
