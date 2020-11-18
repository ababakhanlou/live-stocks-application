class Socket {
  constructor(setPrice) {
    this.socket = new WebSocket(
      "wss://ws.finnhub.io?token=bukp1in48v6qi7366f9g"
    );
    this.priceData = "";

    this.socket.onopen = () => {
      console.log("Connected!");
    };

    this.socket.onmessage = (event) => {
      console.log("Message from server ", event.data);
      const parsedData = JSON.parse(event.data);
      this.priceData =
        (parsedData?.data && parsedData.data[0]?.p) || this.priceData;
      setPrice(this.priceData);
    };

    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  unsubscribe(symbol) {
    console.log("unsub");
    this.socket.send(JSON.stringify({ type: "unsubscribe", symbol }));
  }

  subscribe(symbol) {
    console.log("sub");
    this.socket.send(JSON.stringify({ type: "subscribe", symbol }));
  }
}

export default Socket;
