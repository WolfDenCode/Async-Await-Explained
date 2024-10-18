const apiKey = "cs968j1r01qoa9gbgiugcs968j1r01qoa9gbgiv0"; // Replace with your Finnhub API key

// Function to update the TradingView widget
function updateTradingViewWidget(symbol) {
  new TradingView.widget({
    width: 980,
    height: 610,
    symbol: `NASDAQ:${symbol}`, // Update the symbol
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: "tradingview_abcde",
  });
}

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

// Ticker switcher
document
  .getElementById("ticker-switcher")
  .addEventListener("change", (event) => {
    const selectedSymbol = event.target.value;

    // Update TradingView widget and fetch stock data when the ticker is switched
    updateTradingViewWidget(selectedSymbol);
    fetchStockDataWithPromises(selectedSymbol);
  });

// Initial load
fetchStockDataWithPromises("AAPL"); // Default stock on page load
