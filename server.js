const http = require("http");

const server = http.createServer((req,rep)=>{
    // server logic
});

server.listen(80, ()=>{console.log("server running on port 80")});

