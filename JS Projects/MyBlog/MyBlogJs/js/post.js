/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostId();
}

const getPostId = () =>{
    const currUrl = window.location.search;
    const UrlParam = new URLSearchParams(currUrl);
    const id = UrlParam.get("id");
}
const getPost = () => {
    fetch(API_URL,{
        method:"GET"
    }).then((req)=>{
        return req.json()
    }).then((data)=>{
        console.log(data)
    })
}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string 
}

