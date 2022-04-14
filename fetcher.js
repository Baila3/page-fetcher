const fs = require('fs')
arg = process.argv.slice(2, 4)
const net = require('net');
const request = require('request');

const url = arg[0];
const filename = arg[1];
const responseCallback = function (body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log("Bytes", body.length)
  fs.writeFile(filename, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log("successful load")
    }})

}
request(url, responseCallback);
responseCallback(null, 200, "hello")
responseCallback("something", 500, null)
  //file written successfully



// request(arg[0], (err, response) => {
//   fs.writeFile(arg[1],response, function (err) {
//     if (err) return console.log(err);
//     console.log(`Downloaded and saved ${arg[0].length} bytes to ${arg[1]}`);
//   });
  

console.log("url", arg[0])
console.log("filename", arg[1])




