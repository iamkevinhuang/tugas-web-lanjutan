const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const logger = require("morgan");

app.use(logger("dev"));

app.use(express.static(__dirname + "/public"));

//membuat route dengan method GET
app.get("/api/data_mhs/", function (req, res) {
    //harcode sementara karena belum masuk db
    if (req.query.nim == "181111218"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.send({nim: req.query.nim, nama: "Kevin", Jurusan: "TI", email: "kvnhuang7@gmail.com"});
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.send({error: "Mhs Tidak Ditemukan !"});
    }
    
});

//membuat route dengan method POST
const data = bodyParser.urlencoded({ extended: false });
app.post("/api/pendaftaran_maba", data, function (req, res) {
    res.statusCode = 201;
    res.send(req.body);
});

app.listen(3000, function () {
    console.log("Server is running !");
});
