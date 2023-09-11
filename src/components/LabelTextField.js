import React from 'react'

function LabelTextField(props) {
const {
  label
} = props
  return (
    <>
      <input
        type="text"
        className="py-3 px-4 pr-16 block w-full border shadow-sm rounded-md text-sm focus:z-10"
        required
        {...props}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
        <span className="text-gray-500">{label}</span>
      </div>
    </>
  )
}

export default LabelTextField