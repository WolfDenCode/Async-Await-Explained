const apiKey = "cs968j1r01qoa9gbgiugcs968j1r01qoa9gbgiv0"; // Replace with your Finnhub API key
const stockSymbol = "AAPL";

// Function to fetch stock data asynchronously using async/await
async function fetchStockData(stock) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`;

  try {
    // Asynchronous API call
    const response = await fetch(url);

    // Parse the JSON response
    const data = await response.json();

    // Display stock price in the DOM
    document.getElementById(
      "stock-data"
    ).innerText = `Current Price of ${stock}: ${data.c} USD`;
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
}

// Fetch stock data on page load
fetchStockData(stockSymbol);

setInterval(() => {
  fetchStockData(stockSymbol);
}, 5000);
