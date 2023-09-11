import React from 'react'

function TextField(props) {
  const {
    type
  } = props;

  return (
    <input
      type={type}
      className="block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
      required
      {...props}
    />
  )
}

export default TextField