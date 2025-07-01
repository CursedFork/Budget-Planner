import React, { useState } from 'react';

const categories = ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Misc'];

const IncomeAllocator = () => {
  const [income, setIncome] = useState('');
  const [percentages, setPercentages] = useState(
    categories.reduce((acc, cat) => {
      acc[cat] = 0;
      return acc;
    }, {})
  );

  // quick sum of all the percentages to keep an eye on total allocation
  const totalPercent = Object.values(percentages).reduce((a, b) => a + b, 0);

  const onIncomeChange = (e) => {
    const val = e.target.value;
    // just basic check so user can't go above 100%
    if (val === '' || (!isNaN(val) && Number(val) >= 0)) {
      setIncome(val);
    }
  };

  const onSliderChange = (category, val) => {
    setPercentages((old) => ({
      ...old,
      [category]: Number(val),
    }));
  };

  return (
    <section
      style={{
        maxWidth: 600,
        margin: '2rem auto',
        padding: 20,
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ marginBottom: 16, color: '#1e293b' }}>
        Income Allocation
      </h2>

      <label style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>
        Monthly Income:
      </label>
      <input
        type="number"
        min="0"
        value={income}
        onChange={onIncomeChange}
        placeholder="Enter your monthly income"
        style={{
          padding: 8,
          fontSize: 16,
          borderRadius: 4,
          border: '1px solid #ccc',
          width: '100%',
          marginBottom: 24,
        }}
      />

      <div
        style={{
          marginBottom: 16,
          fontWeight: '600',
          color: totalPercent > 100 ? 'red' : '#1e293b',
        }}
      >
        Total Allocation: {totalPercent}%
        {totalPercent > 100 && ' (Oops! That’s over 100%)'}
      </div>

      {categories.map((cat) => {
        const allocated = income && !isNaN(income)
          ? ((percentages[cat] / 100) * income).toFixed(2)
          : '0.00';

        return (
          <div key={cat} style={{ marginBottom: 16 }}>
            <label
              htmlFor={`slider-${cat}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 500,
                color: '#1e293b',
              }}
            >
              <span>{cat}</span>
              <span>
                {percentages[cat]}% (${allocated})
              </span>
            </label>

            <input
              id={`slider-${cat}`}
              type="range"
              min="0"
              max="100"
              value={percentages[cat]}
              onChange={(e) => onSliderChange(cat, e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        );
      })}

      {totalPercent !== 100 && (
        <p style={{ color: totalPercent > 100 ? 'red' : '#555', fontSize: 14 }}>
          * Try to get the total allocation to 100%
        </p>
      )}
    </section>
  );
};

export default IncomeAllocator;