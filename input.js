const { moveUp, moveLeft, moveDown, moveRight } = require("./constants");

let connection;// Stores the active TCP connection object.

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  } else if (input === moveUp) {
    connection.write("Move: up");
  } else if (input === moveLeft) {
    connection.write("Move: left");
  } else if (input === moveDown) {
    connection.write("Move: down");
  } else if (input === moveRight) {
    connection.write("Move: right");
  } else if (input === 'l') {
    connection.write("Say: Hi!");
  }
};

module.exports = { setupInput };