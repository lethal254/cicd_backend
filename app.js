const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json({
    msg: "Hello Backend updated today night",
  })
})

app.listen(8000, () => {
  console.log("Done")
})
