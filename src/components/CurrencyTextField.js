import React from 'react'

function CurrencyTextField(props) {
  const {
    currency
  } = props;

  return (
    <>
      <div class="px-4 pt-1 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200">
        <span class="text-sm">{currency}</span>
      </div>
      <input 
      type="text" 
      class="pt-4 pb-3 pl-3 block w-full border border-gray-200 shadow-sm rounded-md rounded-l-none text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
      required
      {...props}
      />
    </>
  )
}

export default CurrencyTextField