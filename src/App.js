import React from "react";
import Banner from "./components/Banner";
import StockList from "./components/StockList";
import Socket from "./services/Socket";
import Offering from "./services/Offering";

import "./App.css";

function App() {
  const socket = new Socket();

  const stocks = new Offering();
  const list = stocks.list();

  return (
    <div className="App">
      <Banner />
      <div className="App-stocks">
        {list.map((data) => (
          <StockList
            key={data.name}
            name={data.name}
            code={data.code}
            action={() => console.log(data.name)}
          />
        ))}
      </div>
      <button onClick={socket.subscribe}> sub</button>
      <button onClick={socket.unsubscribe}> unsub</button>
    </div>
  );
}

export default App;
