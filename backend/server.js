const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes");
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.static("public"));
app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
