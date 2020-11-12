class Socket {
  constructor() {
    this.stockList = [
      { name: "Apple", code: "APPL" },
      { name: "Amazon", code: "AMZN" },
      { name: "Microsoft", code: "MSFT" },
      { name: "Google", code: "GOOGL" },
      { name: "Facebook", code: "FB" },
      { name: "Tesla", code: "TSLA" },
    ];
  }

  list() {
    return this.stockList;
  }
}

export default Socket;
