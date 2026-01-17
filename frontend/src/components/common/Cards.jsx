import React from 'react'
import { Link } from 'react-router-dom'

function Cards({id, title, last_opened, status}) {
  return (
    <div>
      <Link to={`/forms/${id}/edit`} className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-200 rounded-lg shadow-xs hover:bg-neutral-secondary-medium hover:shadow-md hover:-translate-y-0.5">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{title}</h5>
        <p className="text-body mb-1">Last edited:{last_opened}</p>
        <span className="bg-green-600 text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-full">{status}</span>
      </Link>
    </div>
  )
}

export default Cards
