import { useState } from 'react';
import Main from './containers';
import Steper from './contexts/steper';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    "form1": {
      property_name: '',
      Address_line: '',
      Country: '0',
      City: '0',
      zip_code: '',
      date: '',
    },
    "form2": {
      lender: '',
      loanAmount: '',
      startDate: '',
      rateType: '',
      interestRate: 'Fixed',
      interestCapitalization: 'Monthly',
      interestOnlyPeriod: '',
      term: '',
      amortization: '',
      financingFees: '',
    }
  });

  return (
    <Steper.Provider value={{ step, setStep, data, setData }}>
      <Main />
    </Steper.Provider>
  );
}

export default App;
