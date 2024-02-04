import React, { useState } from 'react';

const IncomeTaxCalculator = () => {
  const [taxableIncome, setTaxableIncome] = useState('');
  const [calculatedTax, setCalculatedTax] = useState(null);

  const calculateTax = () => {
    const income = parseFloat(taxableIncome);
    let tax = 0;

    if (income <= 9225) {
      tax = income * 0.1;
    } else if (income <= 37450) {
      tax = 922.5 + (income - 9225) * 0.15;
    } else if (income <= 90750) {
      tax = 5156.25 + (income - 37450) * 0.25;
    } else if (income <= 189300) {
      tax = 18481.25 + (income - 90750) * 0.28;
    } else if (income <= 411500) {
      tax = 46075.25 + (income - 189300) * 0.33;
    } else if (income <= 413200) {
      tax = 119401.25 + (income - 411500) * 0.35;
    } else {
      tax = 119996.25 + (income - 413200) * 0.396;
    }

    setCalculatedTax(tax);
  };

  return (
    <div style={{
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
      fontSize: '100%',
      backgroundColor: 'white',
      width: '730px',
      margin: '20px 0 0 20px',
      border: '3px solid blue',
      padding: '20px', 
      textAlign: 'left',
      color: '#333', 
    }}>
      <h1 style={{
        fontSize: '150%',
        marginBottom: '1em',
      }}>Income Tax Calculator</h1>
      <label style={{
        display: 'block',
        marginBottom: '10px',
      }}>
        Enter Taxable Income:
        <input
          type="number"
          value={taxableIncome}
          onChange={(e) => setTaxableIncome(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            borderRadius: '5px',
            border: '1px solid blue',
          }}
        />
      </label>
      <button style={{
        background: 'blue',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }} onClick={calculateTax}>
        Calculate
      </button>

      {calculatedTax !== null && (
        <div style={{
          marginTop: '20px',
          border: '1px solid blue',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#fff', 
        }}>
          <label style={{
            display: 'block',
            marginBottom: '10px',
            color: 'blue',
          }}>
            Income tax owed:
          </label>
          <p style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'blue',
          }}>
            ${calculatedTax.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
