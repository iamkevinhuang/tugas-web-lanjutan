const fs = require("fs");

try {
    fs.renameSync("./M02-fsModuleAsync/yourJSONFile.json", "./M02-fsModuleAsync/myJSONFile.json");
    console.log("Berhasil mengganti nama!");
} catch (err) {
    console.warning("Please run 'node .\M02-fsModuleAsync\asyncRename.js' first !");
    console.error(err);
}