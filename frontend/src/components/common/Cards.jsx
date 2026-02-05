import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ id, title, last_opened, status }) {
  return (
    <Link to={`/forms/${id}/edit`} className="bg-neutral-primary-soft block w-full h-52 p-6 border border-gray-200 rounded-lg shadow-xs hover:bg-neutral-secondary-medium hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between" >
      <div>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 line-clamp-2">{title}</h5>
        <p className="text-body mb-1">Last edited: {last_opened}</p>
      </div>
      <div>
        {status.toLowerCase() === 'active' ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Active</span>
        ) : status.toLowerCase() === 'disabled' ? (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Disabled</span>
        ) : (
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{status}</span>
        )}
      </div>
    </Link >
  )
}

export default Cards

