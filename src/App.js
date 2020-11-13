import React from "react";
import Banner from "./components/Banner";
import StockList from "./components/StockList";
import Socket from "./services/Socket";
import stocks from "./services/offering";

import "./App.css";

function App() {
  const socket = new Socket();

  return (
    <div className="App">
      <Banner />
      <div className="App-stocks">
        {stocks.map((data) => (
          <StockList
            key={data.name}
            data={data}
            sub={socket.subscribe}
            unsub={socket.unsubscribe}
            socket={socket}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
