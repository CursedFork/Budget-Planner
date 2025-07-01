import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ExpenseTracker from './components/ExpenseTracker';
import IncomeAllocator from './components/IncomeAllocator';
import HowTo from './components/HowTo';


function App() {
  return (
    <div style={styles.appWrapper}>
      <Header />
      <main style={styles.mainContent}>
        <HowTo />
        <IncomeAllocator />
        <ExpenseTracker />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  appWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #cfd9df, #e2ebf0, #f0f4f8)', // lighter gradient
    color: '#1e293b',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
  },
};


export default App;