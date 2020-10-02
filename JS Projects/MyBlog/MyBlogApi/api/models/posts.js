var fs = require('fs');

class posts{
    getPost(){
        return this.readData();
    }
    getIndividualPost(postId){
        let posts = this.readData();
        let foundPost = posts.find((post)=>post.id == postId);
        return foundPost;

    }
    addPost(data){
        let currdata = this.readData();
        currdata.unshift(data);
        this.storeData(currdata)

    }
    storeData(data){
        let jsonData = JSON.stringify(data);
        fs.writeFileSync("data.json",jsonData);
    }
    readData(){
        let rawData = fs.readFileSync('data.json');
        let posts = JSON.parse(rawData); 
        return posts;
    }
}

module.exports = posts;