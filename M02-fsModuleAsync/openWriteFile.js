const fs = require("fs");

fs.open("./M02-fsModuleAsync/biodata.txt", "w+", function (err, file) {
    if (err) {
        throw err;
    }

    let data = "Tugas Web Lanjutan";

    fs.writeFile(file, data, (err) => {
        if (err) {
            throw err;
        }
        else{
            console.log("Done !");
        }
    });


    fs.readFile(file, (err, data) => {
        if (err){
            throw err;
        }
        else{
            console.log(data.toString("utf8"));
        }
    });
});