// const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const postModel  = require("./schema")
// const { request } = require("http");
const app = express();
const port = 5000;


const DB_URI = "mongodb+srv://shyzi:shyzi@cluster0.6ajuk.mongodb.net/myapp"
mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.post("/create", (request , response)=>{
    try {
        const body = request.body;
        postModel.create(body, (error,data)=>{
            if(error){
                throw error;

            }else{
                console.log(data);
                response.send("create post successfuly")
            }
        });

        
    } catch (error) {
        response.send(`got an error`, error.message);
    }
});



app.get("/posts", (request , response)=>{
    try {
        const body = request.body;
        console.log(body);
        postModel.find({}, (error,data)=>{
            if(error){
                throw error;

            }else{
                console.log(data);
                response.send(data)
            }
        });

        
    } catch (error) {
        response.send(`got an error during getting post`, error.message);
    }
});


mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(`mongoose error${error.message}`));

app.listen(port, () => console.log(`your server is running on localhost:${port}`))
