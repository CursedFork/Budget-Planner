import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to the Budget Planner</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1e293b', // dark blue
    padding: '30px',
    color: '#f1f5f9', // light gray
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
    fontWeight: '600',
  },
};

export default Header;