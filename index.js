const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	next()
})

app.use("/", (express.static("Public")))

app.listen(PORT, () => {
	console.log(`App Listening on port ${PORT}`)
})
