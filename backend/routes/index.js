// routes.js
const express = require("express");
const path = require("path");
const fs = require("fs").promises;

const fileService = require("../services/fileService");
const utils = require("../utils/utils");
const router = express.Router();

router.get("/files", async (req, res) => {
  try {
    const files = await fileService.readDir(utils.getFilePath(""));
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/tables/:file", async (req, res) => {
  const { file } = req.params;
  try {
    const filePath = utils.getFilePath(file);
    const content = await fileService.readFile(filePath);
    const jsonData = JSON.parse(content);
    const tables = jsonData.tables;
    res.json(tables);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/table/:file/:table", async (req, res) => {
  const { file, table } = req.params;
  try {
    const filePath = path.join(__dirname, "../public", file);
    const content = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(content);
    console.log(jsonData);
    const selectedTable = jsonData.tables.find((t) => t.title === table);
    res.json(selectedTable);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
