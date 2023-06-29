const http = require('http');
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

const Home = fs.readFileSync("./Home.html");
const index = fs.readFileSync("./intex.html");
const prediction = fs.readFileSync("./prediction.html");
const About_us = fs.readFileSync("./About_us.html");


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req.url);
    url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.end(index);
    }
    else if (url == "/About_us") {
        res.end(About_us);
    }
    else if (url == "/Home") {
        res.end(Home);
    }
     else if (url == "/prediction") {
        res.end(prediction);
    }
    else {
        res.statusCode = 404;
        res.end(`<h1> Bad Luck  KO </h1>`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
