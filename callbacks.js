const apiKey = "cs968j1r01qoa9gbgiugcs968j1r01qoa9gbgiv0"; // Replace with your Finnhub API key

// Function to fetch stock data using a callback
function fetchStockDataWithCallback(stock, callback) {
  const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error);
    });
}

// Callback function to display stock data
function displayStockData(err, data) {
  if (err) {
    console.error("Error fetching stock data:", err);
  } else {
    document.getElementById(
      "stock-data"
    ).innerText = `Current Price of AAPL: ${data.c} USD`;
  }
}

// Fetch stock data on page load using callback
fetchStockDataWithCallback(stockSymbol, displayStockData);
