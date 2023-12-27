const express = require("express");
const userRouter = require("./routes/users")
const bookRouter = require("./routes/books")


const PORT=8081;
const app = express()

app.use(express.json())

app.use("/users",userRouter)
app.use("/books",bookRouter)

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server started"
    })
})

app.all("*",(req,res)=>{
    res.status(500).json({
        message: "this route not added yet"
    })
})
 app.listen(PORT,()=>{
    console.log(`Server working on port ${PORT}`)
 })