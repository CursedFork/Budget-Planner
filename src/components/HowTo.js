import React from 'react';

const HowTo = () => {
  return (
    <section
      style={{
        maxWidth: 700,
        margin: '2rem auto',
        padding: '20px 24px',
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        color: '#1e293b',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: 1.5,
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>How to Use This Budget Planner</h2>
      <ol style={{ paddingLeft: 20 }}>
        <li>Start by typing in your monthly income up top.</li>
        <li>Slide the bars to split your income across categories like rent and groceries.</li>
        <li>Next, head over to the expense tracker and log your actual spending.</li>
        <li>Check out the pie chart to visualize where your money is actually going.</li>
      </ol>
    </section>
  );
};

export default HowTo;
