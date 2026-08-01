export async function getPosts(){
    try{
        //This is fetching posts from the JSONPlaceholder API 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        return data;
    } catch (error){
        console.log(error);
    }
}

export async function createPost(title, body){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            body: JSON.stringify({
            title: title,
            body: body,
            userId: 1

        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const data = await response.json();

    return data;

} catch (error){
    console.log(error);
}
}

export async function updatePost(id, title){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: "PATCH",
            body: JSON.stringify({
                title: title
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const data = await response.json();

        return data;

    } catch (error){
        console.log(error);
    }
}