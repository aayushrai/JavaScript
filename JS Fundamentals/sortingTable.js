/**
 * TODO: Change sortMoviesByRank() function to sort movies list by rank
 * TODO: Sort movies by id, rank, and title through dynamic function
 * TODO: Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]
function sortObj(obj,target){
    for(let i=0;i<obj.length-1;i++){
        for(let j=i+1;j<obj.length;j++){
            if(obj[j-1][target] > obj[j][target]){
                temp = obj[j-1];
                obj[j-1] = obj[j];
                obj[j] =temp;
            }
        }
    }
    return obj;
}

movies = sortObj(movies,"id");
window.onload = loadTable(movies);

function loadTable(obj){
    let tbl = "<table border=1 style='width:100%'>"
    tbl += "<tr><th>Title</th><th>Rank</th><th>Id</th></tr>"
    for(let i=0;i<obj.length;i++){
        tbl += `<tr>
                    <td>${obj[i].title}</td>
                    <td>${obj[i].rank}</td>
                    <td>${obj[i].id}</td>
                <tr>`
    }
    tbl += "</table>"
    document.querySelector("#table").innerHTML = tbl;
    console.log(tbl);
}