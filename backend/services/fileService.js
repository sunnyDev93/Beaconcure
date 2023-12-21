const fs = require("fs").promises;

async function readDir(directory) {
  return await fs.readdir(directory);
}

async function readFile(filePath) {
  return await fs.readFile(filePath, "utf-8");
}

module.exports = {
  readDir,
  readFile,
};
