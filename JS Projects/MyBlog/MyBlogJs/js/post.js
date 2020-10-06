/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    const postId = getPostId();
    getPost(postId);
}

const getPostId = () =>{
    const currUrl = window.location.search;
    const UrlParam = new URLSearchParams(currUrl);
    const id = UrlParam.get("id");
    return id;
}
const getPost = (postId) => {
    fetch(API_URL+postId,{
        method:"GET"
    }).then((req)=>{
        return req.json()
    }).then((data)=>{
       buildPost(data);
    })
}

const buildPost = (data) => {
    console.log(data);
    // HINT: Convert the date number to a Date string 
    document.querySelector("header").style.backgroundImage = `url(${API_BASE_URL}${data.post_image})`
    document.getElementById("individual-post-title").innerHTML = data.title;
    document.getElementById("individual-post-date").innerHTML = new Date(parseInt(data.added_date)).toDateString();
    document.getElementById("individual-post-content").innerHTML = data.content;
    
}

