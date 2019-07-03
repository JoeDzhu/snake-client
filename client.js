const net = require('net');
const {ip, port} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    ip,
    port
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => { //inside the on('xxx'), xxx is the handler
    // console.log('Successfully connected!');
    conn.write('Name: ben');
  });

  conn.on('handleUserInput', () => {
    conn.write('hello!')
  })


  // setInterval(() => {
  //   conn.write("Move: up");},500)
  
  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });

  return conn;
}

module.exports = connect;

//this one produce an object with all the connection information; will be required by the main script play.js