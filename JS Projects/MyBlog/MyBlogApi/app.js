const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData =  new Post();
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
  }
}) 

const getExt = (mineType) => {
    switch(mineType){
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpeg";
    }
}
 
var upload = multer({ storage: storage });
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

app.post("/posts", upload.single('post-image '),  (req,res)=>{
    console.log(req.file);
    const newPost = {
        "id":`${Date.now()}`,
        "title":req.body.title,
        "content":req.body["content"],
        "post_image":req.file.path,
        "added_date":`${Date.now()}`
    }
    console.log(newPost);
    postsData.addPost(newPost);
    res.status(201).send(newPost) ;
})3'
app.listen(3000,()=>console.log("listening at http://localhost:3000"));