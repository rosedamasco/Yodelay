const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const grpc_promise = require('grpc-promise');
// when the .proto file is local we use this method to pass it to our grpcRequest helper function
const PROTO_PATH = __dirname + '/../protos/helloworld.proto';
// grab the proto path:
const fs = require('fs');

const CONFIG_OBJECT = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

// 
// Local File:
// 
// synchronously compiles and loads the .proto file into a definition
// this will be moved to the front end:
const packageDefinition = protoLoader.loadSync(PROTO_PATH, CONFIG_OBJECT);
// * generates a descriptor Object from the loaded API definition
const descriptor = grpc.loadPackageDefinition(packageDefinition).helloworld;
// console.log(descriptor);


// 
// JSON Object: 
// 
// when the .proto file is passed as a JSON object we use this method to pass it to our grpcRequest helper function
// FRONT END:
// const stringDefinition = JSON.stringify(packageDefinition);
//  Let's check to see if we stringifyed it!
// console.log("stringify: ", stringDefinition);
// this is where the frontend passes to the backend:
// console.log('______Passed in from the Front End_______');
// 
// BACK END:
// 
// Write the JSON object locally: 
// fs.writeFile("./protos/output.proto", stringDefinition, 'utf8', function (err) {
//   if (err) {
//     console.log("An error occurred while writing JSON Object to File.");
//     return console.log(err);
//   }
//   console.log("JSON file has been saved.");
// });
// File location:
// this is the file we are going to write the proto to:
// const inputProto = require('../protos/output.proto');
// console.log(inputProto)
// Parse:
// const JSONDefinition = JSON.parse(inputProto);
// console.log('JSONDefinition: ', JSONDefinition);

// 
// STRING:
// 
// when a string is passed to the back end we will then use this method:
// 
// first we 
// 


function grpcRequest(input) {
// 
// STRING:
// 
// when a string is passed to the back end as a string we will then use this method:
// it's passed to express on the req.body which we pass in as the input 
  console.log("grpcRequest input: ", input)

  let port = input.port
  // declare the package.
  const package = new descriptor.YodelayAPI(port, grpc.credentials.createInsecure());
  
  grpc_promise.promisifyAll(package);

  let inputName = input.name;
  let output;

  return package.sayHello()
    .sendMessage({name: inputName})
    .then( res => {
      console.log('Greeting: ', res)
      output = res;
      // console.log(output)
      return output
    })
    .catch(err => console.error(err))
}

module.exports = grpcRequest;