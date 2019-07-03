const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port:50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => { //inside the on('xxx'), xxx is the handler
  console.log('Successfully connected!');
  conn.write('Name: joe');

});

  // setInterval(() => {
  //   conn.write("Move: up");},500)
  
  conn.on('data', (data) => {
    console.log("Server says: ", data);
  });

  return conn;
}

module.exports = { connect };