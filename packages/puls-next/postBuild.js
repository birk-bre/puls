// postBuild.js
const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");

function updateFile(filePath, content) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const updatedContent = content + "\n" + data;
    fs.writeFile(filePath, updatedContent, "utf8", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Updated: ${filePath}`);
      }
    });
  });
}

const cjsIndexPath = path.join(distPath, "index.js");
const esmIndexPath = path.join(distPath, "index.mjs");

updateFile(cjsIndexPath, 'require("./index.css");');
updateFile(esmIndexPath, 'import "./index.css";');
