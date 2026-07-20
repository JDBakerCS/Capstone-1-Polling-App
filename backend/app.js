const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const dbConnection = require("./db")


dbConnection
.authentificate()
.then(()=> console.log("DB connected"))
.catch(console.error);



const app = express()
const PORT = 8080



app.use(express.json())
app.use(moorgan("dev"))
app.use(cors())

async function startApp(){
    await dbConnection.sync()
    app.listen(PORT, () => console.log(`Server runnimg on port ${PORT}`))

}

startApp()