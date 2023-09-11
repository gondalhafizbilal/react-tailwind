import React, { useContext } from 'react'
import PropertyDetail from './PropertyDetail';
import RentRoll from './RentRoll';
import StepsBullets from '../components/StepsBullets';
import Financing from "./Financing";
import Congratulations from "./Congratulation";
import Steper from '../contexts/steper';

function Main() {
  const context = useContext(Steper);
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-5 h-screen'>
        <div className='col-span-1 md:col-span-1 border-r border-gray-900/10'>
          <StepsBullets step={context.step} />
        </div>
        <div className='col-span-1 md:col-span-4 '>
          {context.step === 1 && <PropertyDetail />}
          {context.step === 2 && <RentRoll />}
          {context.step === 3 && <Financing />}
          {context.step === 4 && <Congratulations />}
        </div>
      </div>
    </>
  )
}

export default Main;