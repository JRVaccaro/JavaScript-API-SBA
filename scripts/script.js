import { getPosts } from "./api.js";

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