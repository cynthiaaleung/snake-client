const { IP, PORT } = require("./constants");

const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CLS");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 5000);

    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 1000);

  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;