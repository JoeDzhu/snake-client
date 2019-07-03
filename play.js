const connect = require('./client'); //require the object of all connection data produced by client script.

const setupInput = require('./input'); //require the function to process the input;

const connection = connect(); //store the connection object into connection variable;

setupInput(connection); //give the preview variabl/value to the func of setupInput


//everything is actually happening here as all modules are connected here in this page.


//the connection object is being process byfunc setupInput