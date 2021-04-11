const fs = require("fs");

fs.rename("./M02-fsModuleAsync/myJSONFile.json", "./M02-fsModuleAsync/yourJSONFile.json", (err) => {
    if (err) {
        console.warn("Please run 'node .\M02-fsModuleAsync\syncRename.js' first !");
        console.error(err);
    }
    else{
        console.log("Done !");
    }
  
});