

const API_URL = "http://localhost:3000/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL,{
        method:"GET"
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    let blogPostsContent = "";
    for(let blog of blogPosts){
        const blogDate = new Date(parseInt(blog.added_date)).toDateString();
        const blogPostPage = `post.html?id=${blog.id}`
        blogPostsContent += `
            <a href=${blogPostPage} style="text-decoration:none;">
            <div class="post">
                <div class="post-image" style="background-image:url(${API_BASE_URL}${blog.post_image})"></div>
                <div class="post-content">
                    <div class="post-date">${blogDate}</div>
                    <div class="post-title"><h4>${blog.title}</h4></div>
                    <div class="post-text">${blog.content}</div>
                </div>
            </div>
            </a>
        `
    }
    document.querySelector(".blog-post").innerHTML = blogPostsContent;
}