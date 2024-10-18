const apiKey = "cs968j1r01qoa9gbgiugcs968j1r01qoa9gbgiv0"; // Replace with your Finnhub API key

const stockSymbols = ["AAPL", "GOOGL", "AMZN"]; // Array of stock symbols

// Function to fetch data for multiple stocks at once
function fetchMultipleStockData(stocks) {
  const stockPromises = stocks.map((stock) =>
    fetch(
      `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`
    ).then((response) => response.json())
  );

  // Promise.all will resolve when all stock data is fetched
  Promise.all(stockPromises)
    .then((allData) => {
      allData.forEach((data, index) => {
        const stock = stocks[index];
        document.getElementById(
          "stock-data"
        ).innerText += `\nCurrent Price of ${stock}: ${data.c} USD`;
      });
    })
    .catch((error) => {
      console.error("Error fetching stock data:", error);
    });
}

// Fetch stock data on page load
fetchMultipleStockData(stockSymbols);
