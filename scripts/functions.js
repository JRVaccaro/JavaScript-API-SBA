export function displayPosts(posts){
    const results = document.getElementById("results");

    results.innerHTML = "";

    for(let i = 0; i < posts.length; i++){
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        const title = document.createElement("h3");
        title.textContent = posts[i].title;

        const body = document.createElement("p");
        body.textContent = posts[i].body;

        postDiv.appendChild(title);
        postDiv.appendChild(body);

        results.appendChild(postDiv);
    }
    
}