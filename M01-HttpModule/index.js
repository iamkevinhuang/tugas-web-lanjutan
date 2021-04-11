const http = require("http");

const server = http.createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Pertemuan 1 - Module HTTP</h1>");
        res.end();
    }
);

// Listen di port 3000
server.listen(3000, () => console.log('Server is running !'));