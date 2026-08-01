import { getPosts, createPost } from "./api.js";

import { displayPosts, searchPosts} from "./functions.js";

    

let allPosts = [];

async function loadPosts(){
allPosts = await getPosts();


    displayPosts(allPosts);
}
loadPosts();

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", function()){
    const searchText = searchInput.value;

    const filteredPosts = searchPosts(allPosts, searchText);

displayPosts(filteredPosts);

}

const createButton = document.getElementById("createButton");
const postTitle = document.getElementById("postTitle");
const postBody = document.getElementById("postBody");

createButton.addEventListener("click", async function (){
    const title = postTitle.value;
    const body = postBody.value;

    const newPost = await createPost(title, body);

    console.log(newPost);
});
