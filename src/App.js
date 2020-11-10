import React from "react";
import "./App.css";

function App() {
  const socket = new WebSocket(
    "wss://ws.finnhub.io?token=bukp1in48v6qi7366f9g"
  );

  socket.onopen = () => {
    console.log("Connected!");
    //socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  };

  // Listen for messages
  //socket.addEventListener("message", function (event) {
  // console.log("Message from server ", event.data);
  //});

  socket.onmessage = (event) => {
    console.log("Message from server ", event.data);
  };

  // Unsubscribe
  const unsubscribe = () => {
    console.log("unsub");
    socket.send(JSON.stringify({ type: "unsubscribe", symbol: "AAPL" }));
  };

  const subscribe = () => {
    console.log("sub");
    socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  };

  return (
    <div className="App">
      <p>asdasda</p>
      <button onClick={() => unsubscribe()}>stop</button>
      <button onClick={() => subscribe()}>start</button>
    </div>
  );
}

export default App;
