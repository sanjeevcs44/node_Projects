const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Your First PRogram");
});

server.listen(4000, () => {
    console.log("i am on 4000 port");
});