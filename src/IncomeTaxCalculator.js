import React, { useState } from 'react';

const IncomeTaxCalculator = () => {
  const [taxableIncome, setTaxableIncome] = useState('');
  const [calculatedTax, setCalculatedTax] = useState(null);

  const calculateTax = () => {
    const income = parseFloat(taxableIncome);
    const brackets = [10000, 50000];
    const rates = [0.1, 0.2, 0.3];
    let tax = 0;

    if (income <= brackets[0]) {
      tax = income * rates[0];
    } else if (income <= brackets[1]) {
      tax = brackets[0] * rates[0] + (income - brackets[0]) * rates[1];
    } else {
      tax =
        brackets[0] * rates[0] +
        (brackets[1] - brackets[0]) * rates[1] +
        (income - brackets[1]) * rates[2];
    }

    setCalculatedTax(tax);
  };

  return (
    <div style={{
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
      fontSize: '100%',
      backgroundColor: 'white',
      width: '730px',
      margin: '20px 0 0 20px', // Adjusted the margin to place it on the top-left
      border: '3px solid blue',
      padding: '0 2em 1em',
      textAlign: 'left',
      color: 'blue'
    }}>
      <h1 style={{
        fontSize: '150%',
        marginBottom: '.5em'
      }}>Income Tax Calculator</h1>
      <label style={{
        display: 'block',
        marginBottom: '10px'
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
            border: '1px solid blue'
          }}
        />
      </label>
      <button style={{
        background: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }} onClick={calculateTax}>
        Calculate
      </button>

      {calculatedTax !== null && (
        <div style={{ marginTop: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '10px'
          }}>
            Income tax owed:
          </label>
          <p style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'blue'
          }}>
            ${calculatedTax.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
