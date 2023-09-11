import React, { useContext } from 'react'
import Steper from '../contexts/steper';
import rentRolls from '../data/rentRolls';

function RentRoll() {
  const context = useContext(Steper);
  return (
    <div className='p-10'>
      <div className="grid grid-cols-2 gap-2">
        <h2 className="col-span-1 text-base font-semibold text-gray-900">Rent roll</h2>
        <div className='grid grid-cols-2 gap-2 w-fit place-self-end	'>
          <button className="col-span-1 px-3 py-2 text-xs font-medium inline-flex items-center text-black rounded-lg focus:outline-none focus:ring-blue-300">
            <svg className="w-6 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
            </svg>
            Export template
          </button>
          <button className="col-span-1 px-3 py-2 text-xs font-medium inline-flex items-center text-black rounded-lg focus:outline-none focus:ring-blue-300">
            <svg className="w-6 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
            </svg>
            Import file
          </button>
        </div>
      </div>
      <div className='mt-6'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-400">
          <table className="w-full text-sm text-left dark:text-gray-400 text-center">
            <thead className="text-xs text-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Rent
                </th>
                <th scope="col" className="px-6 py-3">
                  Width (ft)
                </th>
                <th scope="col" className="px-6 py-3">
                  Length (ft)
                </th>
                <th scope="col" className="px-6 py-3">
                  Market Rent
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  SQFT/SQM
                </th>
              </tr>
            </thead>
            <tbody>
              {rentRolls.map((data, index) => (
                <tr key={index} className="text-black text-center bg-white border-b border ">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border">
                    {data.id}
                  </th>
                  <td className="px-6 py-4 border">
                    {data.type}
                  </td>
                  <td className="px-6 py-4 border">
                    {data.rent}
                  </td>
                  <td className="px-6 py-4 border">
                    {data.width}
                  </td>
                  <td className="px-6 py-4 border">
                    {data.height}
                  </td>
                  <td className="px-6 py-4 border">
                    {data.marketRent}
                  </td>
                  <td className="px-6 py-4 border">
                    {data.status}
                  </td>
                  <td className="px-6 py-4 border">
                    {data.sqft}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-teal-950 shadow-sm"
          onClick={() => {
            context.setStep(1)
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            context.setStep(3)
          }}
          className="rounded-md bg-teal-950 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default RentRoll;