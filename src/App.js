import React from "react";
import Banner from "./components/Banner";
import StockList from "./components/StockList";
import Socket from "./services/Socket";

import "./App.css";

function App() {
  const socket = new Socket();

  return (
    <div className="App">
      <Banner />
      <div className="App-stocks">
        <StockList name="Apple" />
        <StockList name="Amazon" />
        <StockList name="Microsoft" />
        <StockList name="Google" />
        <StockList name="Facebook" />
        <StockList name="Tesla" />
      </div>
      <button onClick={socket.subscribe}> sub</button>
      <button onClick={socket.unsubscribe}> unsub</button>
    </div>
  );
}

export default App;
