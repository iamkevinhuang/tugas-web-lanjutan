const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }
);

// Listen di port 3000
server.listen(3000, () => console.log('Server is running !'));