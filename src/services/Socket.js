class Socket {
  constructor() {
    this.priceData = "";

    this.socket = new WebSocket(
      "wss://ws.finnhub.io?token=bukp1in48v6qi7366f9g"
    );

    this.socket.onopen = () => {
      console.log("Connected!");
    };

    this.socket.onmessage = (event) => {
      console.log("Message from server ", event.data);
      const a = JSON.parse(event.data);
      this.priceData = (a?.data && a.data[0]?.p) || this.priceData;
      // console.log(this.priceData);
    };

    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.getPriceData = this.getPriceData.bind(this);
  }

  unsubscribe(symbol) {
    console.log("unsub");
    this.socket.send(JSON.stringify({ type: "unsubscribe", symbol }));
  }

  subscribe(symbol) {
    console.log("sub");
    this.socket.send(JSON.stringify({ type: "subscribe", symbol }));
  }

  getPriceData() {
    return this.priceData;
  }
}

export default Socket;
