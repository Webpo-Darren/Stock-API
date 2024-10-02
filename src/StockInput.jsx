import React, { useEffect, useState, useContext } from "react";
import './Styling.css';
import DisplayOutput from './DisplayOutput';
import { StockContext } from './StockContext';

function StockInput() {
  const { stockData, setStockData } = useContext(StockContext);
   const [submitted, setSubmitted] = useState(true); 

  function handleChange(event) {
    const { name, value } = event.target;
    setStockData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStockData((prevData) => ({
      ...prevData,
      totalCost: prevData.quantity * prevData.price,
    }));
    setSubmitted(true); 
  }

  useEffect(() => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        const latestData = data["Time Series (Daily)"];
        const latestDate = Object.keys(latestData)[0];
        const currentPrice = latestData[latestDate]["4. close"];
        setStockData((prevData) => ({
          prevData,
          currentPrice,
        }));
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [setStockData]);

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div className="container">  
          <input
            name="symbol"
            value={stockData.symbol}
            placeholder="Stock Symbol"
            className="find-input"
            onChange={handleChange}
          />
          <input 
            type="number" 
            name="quantity"
            placeholder="Quantity" 
            value={stockData.quantity} 
            className="find-quantity"
            onChange={handleChange} 
          />
          <input 
            type="number" 
            name="price"
            placeholder="Purchase Price" 
            value={stockData.price} 
            className="find-price"
            onChange={handleChange} 
          />
          <button type="submit">Add Stock</button>
        </div>
        <div className='DisplayBox'>
        <h2>Stock Details:</h2>
        {submitted && (
        <DisplayOutput         
          symbolInput={stockData.symbol} 
          quantityInput={stockData.quantity} 
          priceInput={stockData.price} 
          currentPrice={stockData.currentPrice} 
          totalCost={stockData.totalCost} 
        />
      )}
      </div>
      </form>
     
     
    </div>
  );
}

export default StockInput;
