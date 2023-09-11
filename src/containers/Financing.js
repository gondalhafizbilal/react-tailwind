import React, { useContext, useState } from 'react'
import Steper from '../contexts/steper';
import TextField from '../components/TextField';
import CurrencyTextField from '../components/CurrencyTextField';
import LabelTextField from '../components/LabelTextField';


function Financing() {
  const context = useContext(Steper);
  const [formData, setFormData] = useState(context.data.form2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [selectedRateType, setSelectedRateType] = useState(formData.interestRate);
  const [selectedOption, setSelectedOption] = useState(formData.interestCapitalization);

  const handleRate = (rateType) => {
    setSelectedRateType(rateType);
  };
  const handleCapitalization = (option) => {
    setSelectedOption(option);
  };

  const onSubmit = () => {
    context.setData({
      ...context.data,
      "form2": {
        ...formData,
        "interestRate": selectedRateType,
        "interestCapitalization": selectedOption
      }
    })
    context.setStep(4)
  };

  return (
    <div className='pt-10'>
      <form onSubmit={onSubmit}>
        <h1 className='text-2xl font-medium leading-7 text-gray-900 ml-7'>Financing</h1>
        <ul className="w-full mt-7 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b">
          <li className="mr-2 ml-3">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" aria-current="page" className="inline-block p-4 active text-teal-950 border-b border-b-teal-500">Debt 1</a>
          </li>
          <li className="mr-2">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="inline-block p-4 rounded-t-lg text-gray-400">Add debt</a>
          </li>
        </ul>
        <div className='p-6'>
          <div className="bo space-y-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-black">
                  Lender
                </label>
                <div className="mt-2">
                  <TextField name="lender" value={formData?.lender} type="text" onChange={handleInputChange} />
                </div>
              </div>
              <div className="sm:col-span-2 self-end">
                <div className="">
                  <button className="col-span-1 px-4 py-2 text-xs font-medium inline-flex items-center border- text-black rounded-lg focus:outline-none focus:ring-blue-300 border-2" onClick={() => { context.setStep('Step2') }} disabled>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-black">
                  Loan Amount
                </label>
                <div className="mt-2 flex">

                  <CurrencyTextField
                    currency='$'
                    pattern="^[0-9]*$"
                    onChange={handleInputChange}
                    name='loanAmount'
                    value={formData.loanAmount}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-black">
                  Start Date
                </label>
                <div className="mt-2">
                  <TextField name="startDate" value={formData.startDate} type="date" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-black">
                  Type of Rate
                </label>
                <div className="relative mt-2" role="group">
                  <button
                    type="button"
                    className={`px-10 py-3 text-sm w-2/4 font-medium rounded-l-lg ${selectedRateType === "Fixed"
                      ? "bg-gray-300 text-gray-900 border border-gray-300"
                      : "text-gray-400 border border-gray-300"
                      }`}
                    onClick={() => handleRate("Fixed")}
                  >
                    Fixed
                  </button>
                  <button
                    type="button"
                    className={`px-10 py-3 text-sm w-2/4 font-medium rounded-r-lg ${selectedRateType === "Variable"
                      ? "bg-gray-300 text-gray-900 border border-gray-300 "
                      : "text-gray-400 border border-gray-300"
                      }`}
                    onClick={() => handleRate("Variable")}
                  >
                    Variable
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
                  Interest Rate
                </label>
                <div className="relative mt-2">
                  <LabelTextField label='%' name='rateType' pattern="^[0-9]*$" value={formData.rateType} onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 sm:col-start-1">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-black">
                  Interest capitalization
                </label>
                <div className="mt-2 w-full">
                  <button
                    type="button"
                    className={`w-1/2 py-3 text-sm font-medium rounded-l-lg ${selectedOption === "Monthly"
                        ? "bg-gray-300 text-gray-900 border border-gray-300 "
                        : "text-gray-400 border border-gray-300"
                      }`}
                    onClick={() => handleCapitalization("Monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`w-1/2 py-3 text-sm font-medium rounded-r-lg ${selectedOption === "Semi-Annual"
                        ? "bg-gray-300 text-gray-900 border border-gray-300"
                        : "text-gray-400 border border-gray-300"
                      }`}
                    onClick={() => handleCapitalization("Semi-Annual")}
                  >
                    Semi-Annual
                  </button>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-black">
                  Interest Only Period
                </label>
                <div className="relative mt-2">
                  <LabelTextField
                    label='months'
                    name='interestOnlyPeriod'
                    value={formData.interestOnlyPeriod}
                    // pattern='^1?$|^(11+?)\1+$'
                    onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
                  Term
                </label>
                <div className="mt-2">
                  <TextField type="text" name='term' pattern="^[0-9]*$" value={formData.term} onChange={handleInputChange} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
                  Amortization
                </label>
                <div className="mt-2">
                  <TextField type="text" name='amortization' pattern="^[0-9]*$" value={formData.amortization} onChange={handleInputChange} />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
                  Financing Fees
                </label>
                <div className="flex mt-2">
                  <CurrencyTextField
                    currency='$'
                    pattern="^[0-9]*$"
                    onChange={handleInputChange}
                    name='financingFees' value={formData.financingFees}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-semibold text-teal-950 shadow-sm"
                onClick={() => {
                  context.setStep(2)
                }}
              >
                Back
              </button>
              <button
                className="rounded-md bg-teal-950 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </ form >
    </div >
  )
}

export default Financing;