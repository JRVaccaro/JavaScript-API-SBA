import { getPosts, createPost, updatePost } from "./api.js";

import { displayPosts, searchPosts} from "./functions.js";

    

let allPosts = [];

async function loadPosts(){
allPosts = await getPosts();


    displayPosts(allPosts);
}
loadPosts();

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", function (){
    const searchText = searchInput.value;

    console.log("searching for: " + searchText);
    console.log("allPosts: " + allPosts);

    const filteredPosts = searchPosts(allPosts, searchText);
    console.log("filteredPosts: " + filteredPosts);

displayPosts(filteredPosts);

});

const createButton = document.getElementById("createButton");
const postTitle = document.getElementById("postTitle");
const postBody = document.getElementById("postBody");

createButton.addEventListener("click", async function (){
    const title = postTitle.value;
    const body = postBody.value;

    const newPost = await createPost(title, body);

    allPosts.push(newPost);
    displayPosts(allPosts);
});


const updateButton = document.getElementById("updateButton");
const updateId = document.getElementById("updateId");
const updateTitle = document.getElementById("updateTitle");

updateButton.addEventListener("click", async function(){

const id = updateId.value;
const title = updateTitle.value;


const updatedPost = await updatePost(id, title);

console.log(updatedPost);

});