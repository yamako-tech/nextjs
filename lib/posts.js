import fetch from "node-fetch";
const apiurl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
    const res = await fetch(new URL(apiurl));
    const posts = await res.json();
    return posts;
}

// 詳細画面設定
export async function getAllPostIds() {
    const res = await fetch(new URL(apiurl));
    const posts = await res.json();

    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    });
}

export async function getPostData(id) {
    const res = await fetch(new URL(`${apiurl}/${id}/`));
    const post = await res.json();

    return {
        post,
    };
}