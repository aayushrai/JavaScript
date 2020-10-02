const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData =  new Post();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next(); 
})

app.use("/uploads",express.static("uploads"));

app.get("/posts",(req,res)=>{
    res.json(postsData.getPost())
})
 
app.get("/posts/:post_id",(req,res)=>{
    let postId = req.params.post_id;
    let foundPost = postsData.getIndividualPost(postId);
    if(foundPost){
        res.status(200).send(foundPost);
    }
    else{
        res.status(404).send("Not Found"); 
    }
})
app.listen(3000,()=>console.log("listening at http://localhost:3000"));