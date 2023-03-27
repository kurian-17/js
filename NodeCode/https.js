const http = require("node:http")
const { json } = require("stream/consumers")


const server = http.createServer((res,req) => {
    if (req.url == "/"){
        res.writeHead(200)
        res.end(json.stringify({hero:"batman",villan:"jocker"})) 
    }
})

server.listen(3000,() => {
    console.log("server running")
})