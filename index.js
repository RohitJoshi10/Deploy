const http = require('http');
const fs = require("fs");

// Port 80 by default hota hai
const PORT = 2000;
const hostname = "localhost";

const home = fs.readFileSync("./index.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");

const server = http.createServer((request,response)=>{
    
    if(request.url === "/"){
        return response.end(home)
    }
    if(request.url==="/about"){
        return response.end(about)
    }
    if(request.url==="/contact"){
        return response.end(contact)
    }
    if(request.url==="/serice"){
        return response.end("<h1>Service Page</h1>")
    }
    else{
        return response.end("<h1>404 Error Page Not Found </h1>")
    }
   
});

server.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`);
});