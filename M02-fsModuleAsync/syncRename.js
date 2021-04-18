const fs = require("fs");

try {
    fs.renameSync("yourJSONFile.json", "myJSONFile.json");
    console.log("Berhasil mengganti nama!");
} catch (err) {
    console.warning("Please run 'node asyncRename.js' first !");
    console.error(err);
}