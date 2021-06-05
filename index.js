const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()

app.use(cors())

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/api/history" , require("./api/route"))


const PORT = process.env.PORT || 6969

app.listen(PORT , ()=> {
    console.log("App is running on port " + PORT)
    mongoose.connect(`mongodb+srv://junaedayon:vfHE$aZ8q!B6r*7@cluster0.s3ghl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` , {useNewUrlParser: true, useUnifiedTopology: true},
       () => {
           console.log("Database connected")
       }
    )

})

// vfHE$aZ8q!B6r*7

// mongodb+srv://junaedayon:<password>@cluster0.s3ghl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


