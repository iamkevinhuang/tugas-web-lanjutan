const fs = require("fs");

fs.appendFile("./M02-fsModuleAsync/biodata.txt", "Kelas : MW-B Sore", function (err) {
    if (err){
        throw err;
    } 
    else{
        console.log("Berhasil disimpan!");
    }
});
