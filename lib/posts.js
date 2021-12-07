import fetch from "node-fetch";
const apiurl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
    const res = await fetch(new URL(apiurl));
    const posts = await res.json();
    return posts;
}