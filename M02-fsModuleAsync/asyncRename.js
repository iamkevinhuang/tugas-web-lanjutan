const fs = require("fs");

fs.rename("myJSONFile.json", "yourJSONFile.json", (err) => {
    if (err) {
        console.warn("Please run 'node syncRename.js' first !");
        console.error(err);
    }
    else{
        console.log("Done !");
    }
  
});