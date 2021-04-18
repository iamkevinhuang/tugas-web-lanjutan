const fs = require("fs");

fs.appendFile("biodata.txt", "Kelas : MW-B Sore", function (err) {
    if (err){
        throw err;
    } 
    else{
        console.log("Berhasil disimpan!");
    }
});
