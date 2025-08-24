const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Route
app.get("/", (req, res) => {
  return res.json({
    message: "hey! I am node js controller",
  });
});

// Start server (this should be OUTSIDE the route)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
