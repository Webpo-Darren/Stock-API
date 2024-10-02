import React, { useContext } from 'react';
import { StockContext } from './StockContext';

function DisplayOutput() {
    const { stockData } = useContext(StockContext);
    const profitLoss = stockData.currentPrice && stockData.totalCost
        ? (stockData.currentPrice - stockData.totalCost).toFixed(2): null;

    return (
      <div>
        
        <p className="Stock-result">
          <strong>Stock Symbol:</strong> {stockData.symbol || "N/A"}
        </p>
        <p className="Quantity-result">
          <strong>Quantity:</strong> {stockData.quantity || "N/A"}
        </p>
        <p className="PurchasePrice-result">
          <strong>Purchase Price:</strong> {stockData.price || "N/A"}
        </p>
        <p className="CurrentPrice-result">
          <strong>Current Price:</strong> {stockData.currentPrice || "N/A"}
        </p>
        <p className="ProfitLoss-result">
          <strong>Profit/Loss:</strong> {profitLoss !== null ? profitLoss : "N/A"}
        </p>
      </div>
    );
}

export default DisplayOutput;
