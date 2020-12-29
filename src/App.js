import React from "react";
import { useDispatch } from "react-redux";
import { receivePrice } from "./actions/stocks";
import Banner from "./components/Banner";
import StockList from "./components/StockList";
import StockModal from "./components/StockModal";
import Socket from "./services/Socket";
import stocks from "./services/Offering";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const updateStockPrice = (price) => dispatch(receivePrice(price));
  const socket = new Socket(updateStockPrice);

  return (
    <div className="App">
      <Banner />
      <StockModal unsub={socket.unsubscribe} />
      <div className="App-stocks">
        {stocks.map((data) => (
          <StockList
            key={data.name}
            data={data}
            sub={socket.subscribe}
            socket={socket}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
