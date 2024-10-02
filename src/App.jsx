import React from 'react';
import { StockProvider } from './StockContext'; // Adjust the path as necessary
import './Styling.css';
import StockInput from './StockInput';
import DisplayOutput from './DisplayOutput';

function App() {
  return (
    <StockProvider>
      <div>
        <h1>Finance Dashboard</h1>
        <StockInput />
        </div>

    </StockProvider>
  );
}

export default App;
