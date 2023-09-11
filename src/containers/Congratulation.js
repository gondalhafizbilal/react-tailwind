import React, { useContext } from 'react'
import Steper from '../contexts/steper';

function Congratulations() {
  const context = useContext(Steper);
  return (
    <>
      <div className='p-4'>
        <div className="flex justify-center items-center h-screen">
          <h1 className='flex items-center text-5xl font-extrabold'>Congratulations</h1>
        </div>
        <div className=" flex items-center justify-end ">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-semibold text-teal-950 shadow-sm"
            onClick={() => {
              context.setStep(3)
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  )
}

export default Congratulations;