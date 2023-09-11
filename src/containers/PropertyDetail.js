import React, { useContext, useState } from 'react'
import Steper from '../contexts/steper';
import SelectMenu from '../components/SelectMenu'
import TextField from '../components/TextField';
import cities from '../data/cities';
import countries from '../data/countries';

function PropertyDetail() {
  const context = useContext(Steper);
  const [formData, setFormData] = useState(context.data.form1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    context.setData({
      ...context.data,
      "form1": {
        ...formData
      }
    })
    context.setStep(2);
  };

  return (
    <div className='p-10'>
      <form onSubmit={onSubmit}>
        <h1 className='text-2xl font-medium leading-7 text-gray-900'>Property details</h1>
        <h2 className="mt-5 mb-3 text-base font-semibold leading-7 text-gray-900">Property details</h2>
        <div className="space-y-4 gap-5">
          <div className="">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-400">
                Property name
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="mt-2">
                  <TextField name="property_name" value={formData.property_name} type="text" onChange={handleInputChange} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-400">
                Address line
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="mt-2">
                  <TextField name="Address_line" value={formData.Address_line} type="text" onChange={handleInputChange} />
                </div>
              </div>
            </div>
          </div>

          <div className="bo space-y-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <SelectMenu label='Country' name='Country' value={formData.Country} selection={countries} defaultState={formData.Country} onChange={handleInputChange} />
              </div>
              <div className="sm:col-span-2">
                <SelectMenu label='City' name='City' value={formData.CityCity} selection={cities} defaultState={formData.City} onChange={handleInputChange} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-400">
                  ZIP/Postal code
                </label>
                <div className="mt-2">
                  <TextField name="zip_code" value={formData.zip_code} type="text" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-400">
                  Close Date
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="mt-2">
                    <TextField name="date" value={formData.date} type="date" onChange={handleInputChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            className="rounded-md bg-teal-950 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default PropertyDetail;