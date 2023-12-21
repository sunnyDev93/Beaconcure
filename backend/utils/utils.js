const path = require("path");

function getFilePath(fileName) {
  return path.join(__dirname, "../public", fileName);
}

module.exports = {
  getFilePath,
};
