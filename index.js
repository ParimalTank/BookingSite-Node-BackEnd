const express = require("express");
const DbConnection = require("./utils/DbConnection");
const cors = require("cors")
const userRoute = require("./routes/UserRoutes")
const bookingRoute = require("./routes/BookRoutes")
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:3000", Credential: true }))

app.listen(4000, () => {
    console.log("Server Running on 4000 .....")
})

DbConnection(app)

app.use("/auth", userRoute);
app.use("/slot", bookingRoute);
