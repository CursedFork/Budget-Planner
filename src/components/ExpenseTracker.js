import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// registering pie chart stuff
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseTracker = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Rent');
  const [expenses, setExpenses] = useState([]);

  const categories = ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Misc'];

  // adds a new expense to the list
  const addExpense = (e) => {
    e.preventDefault();

    // quick check — could be more robust
    if (!amount || isNaN(amount)) return;

    setExpenses((oldExpenses) => [
      ...oldExpenses,
      { amount: parseFloat(amount), category },
    ]);
    setAmount('');
  };

  // calculate totals for each category
  const categoryTotals = categories.map((cat) => {
    return expenses
      .filter((item) => item.category === cat)
      .reduce((acc, cur) => acc + cur.amount, 0);
  });

  // sum of all expenses
  const totalSpent = expenses.reduce((acc, item) => acc + item.amount, 0);

  // pie chart data setup — might want to tweak colors later
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categoryTotals,
        backgroundColor: [
          '#3aaef2', // kinda blue
          '#174ea6', // darker blue
          '#8a8a8a', // gray-ish
          '#f2a900', // yellow-ish
          '#0f9d58', // green-ish
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <section
      style={{
        backgroundColor: '#f9fafb',
        padding: '28px',
        borderRadius: 6,
        maxWidth: 620,
        margin: '2rem auto',
        boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
      }}
    >
      <form onSubmit={addExpense} style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
        <label style={{ fontWeight: '600', fontSize: 16 }}>Amount:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          style={{
            padding: 8,
            fontSize: 16,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
        />

        <label style={{ fontWeight: '600', fontSize: 16 }}>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: 8,
            fontSize: 16,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            padding: '10px 0',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Add Expense
        </button>
      </form>

      <div style={{ fontWeight: '700', fontSize: 18, color: '#1e293b', marginBottom: 16, textAlign: 'center' }}>
        Total Expenses: ${totalSpent.toFixed(2)}
      </div>

      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 12 }}>Expense History</h3>
        {expenses.length === 0 ? (
          <p>Nothing here yet.</p>
        ) : (
          <ul style={{ paddingLeft: 20 }}>
            {expenses.map((item, i) => (
              <li key={i}>
                ${item.amount.toFixed(2)} – {item.category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 style={{ marginBottom: 12 }}>Spending Chart</h3>
        <Pie data={data} />
      </div>
    </section>
  );
};

export default ExpenseTracker;