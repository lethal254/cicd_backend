const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json({
    msg: "This is to know if the runner updates",
  })
})

app.listen(8000, () => {
  console.log("Done")
})
