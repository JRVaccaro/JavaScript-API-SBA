import { getPosts } from "./api.js";

async function loadPosts(){
    const posts = await getPosts();

    console.log(posts);
}
loadPosts();