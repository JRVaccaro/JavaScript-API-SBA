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

