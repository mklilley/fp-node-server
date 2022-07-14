const http = require("http");

const server = http.createServer((req,rep)=>{
    // server logic
});

server.listen(3000, ()=>{console.log("server running on port 3000")});

