import React, { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
    const [stockData, setStockData] = useState({
        symbol: "",
        quantity: "",
        price: "",
        currentPrice: null,
        totalCost: 0,
    });

    return (
        <StockContext.Provider value={{ stockData, setStockData }}>
            {children}
        </StockContext.Provider>
    );
};
