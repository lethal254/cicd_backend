const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json({
    msg: "Hello Backend updated",
  })
})

app.listen(8000, () => {
  console.log("Done")
})
