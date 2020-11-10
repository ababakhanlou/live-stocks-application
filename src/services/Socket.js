class Socket {
  constructor() {
    this.socket = new WebSocket(
      "wss://ws.finnhub.io?token=bukp1in48v6qi7366f9g"
    );

    this.socket.onopen = () => {
      console.log("Connected!");
    };

    this.socket.onmessage = (event) => {
      console.log("Message from server ", event.data);
    };

    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  unsubscribe() {
    console.log("unsub");
    this.socket.send(JSON.stringify({ type: "unsubscribe", symbol: "AAPL" }));
  }

  subscribe() {
    console.log("sub");
    this.socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  }
}

export default Socket;
