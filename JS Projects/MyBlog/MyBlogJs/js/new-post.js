

const API_URL = "http://localhost:3000/posts";

const submitNewPost = () => {
   const post_title = document.getElementById("form-post-title").value;
   const post_content = document.getElementById("form-post-content").value;
   const post_image  = document.getElementById("form-post-image").files[0];
   let data = new FormData();
   data.append("post-image",post_image);
   data.append("title",post_title);
   data.append("content",post_content);

   fetch(API_URL,{
       method:"POST",
       body:data
   }).then(()=>{
    window.location.href = "index.html" 
   })
}