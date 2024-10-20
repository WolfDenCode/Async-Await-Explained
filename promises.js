const apiKey = "cs968j1r01qoa9gbgiugcs968j1r01qoa9gbgiv0"; // Replace with your Finnhub API key
const stockSymbol = "AAPL";
// Function to fetch stock data using Promises
function fetchStockDataWithPromises(stock) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "stock-data"
      ).innerText = `Current Price of ${stock}: ${data.c} USD`;
    })
    .catch((error) => {
      console.error("Error fetching stock data:", error);
    });
}

// Fetch stock data on page load
fetchStockDataWithPromises(stockSymbol);
