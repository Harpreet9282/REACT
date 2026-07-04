const fs = require('fs');

fs.writeFileSync("test.txt","Hello World");
const data=fs.readFileSync("test.txt","utf-8");

console.log(data);

const http = require('http');
const server = http.createServer(()=>{
    console.log("server running");
})

server.listen(5000);